/* eslint-disable react/jsx-indent-props */
import { MovableArea, MovableView, View, Map, ScrollView } from '@tarojs/components'
import { useEffect, useRef, useState } from 'react';

import './index.less';
import Movable from './Movable';

const h2 = 600;

const h1 = 400;

const h0 = 0;

const gap = 50;

const StageDivider = {
	up: {
		S0 : {
			value: h0,
			min: 0,
			max: h1 - gap,
		},
		S1 : {
			value: h1,
			min: h1 - gap,
			max: h2 - gap,
		},
		S2 : {
			value: h2,
			min: h2 - gap,
			max: Infinity,
		},
	},
	down: {
		S0 : {
			value: h0,
			min: 0,
			max: h0 + gap,
		},
		S1 : {
			value: h1,
			min: h0 + gap,
			max: h1 + gap,
		},
		S2 : {
			value: h2,
			min: h1 + gap,
			max: Infinity,
		},
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function FadeInOut({ children, duration = 500, hidden = false }) {
	console.log('render', 'FadeInOut', hidden, );

  const [opacity, setOpacity] = useState<string | number>('0');

	function setOpacityFn(op: number | string) {
		return setTimeout(() => {
			setOpacity(op);
		})
	}

  useEffect(() => {
		const timerId = setOpacityFn(1);
    return () => clearTimeout(timerId);
  }, []);

	useEffect(() => {
		if (hidden) {
			setOpacityFn('0')
		} else {
			setOpacityFn(1)
		}
		// const timeId = setOpacityFn(hidden ? '0' : 1);
    // return () => clearTimeout(timeId);
	}, [hidden])

  const style = {
    opacity,
    transition: `opacity ${duration}ms ease-in-out`,
  };

  return <View style={style}>{children}</View>;
}

export default function MovablePage() {
	const [y, setY] = useState(h0);
	const [hidden, setHidden] = useState(false);
	const yRef = useRef(h2);
	const syRef = useRef(yRef.current);

	const [showHeader, setShowHeader] = useState(y === h0);

	function onChange(e) {
		console.log('y', e.detail.y);
		if (yRef.current <= 150 && e.detail.y > 150) {
			setHidden(true)
		}
		yRef.current = e.detail.y;
	}

	function onTouchEnd() {
		const _y = yRef.current;
		setY(_y);

		const syRefCurrent = syRef.current;

		const direction = _y - syRefCurrent > 0 ? 'down' : 'up';

		const stageDivider = StageDivider[direction];
		
		sleep(50).then(() => {
			for (const stage of Object.values(stageDivider)) {
				if (_y >= stage.min && _y <= stage.max) {
					setY(stage.value);
					setShowHeader(stage.value === h0)
					setHidden(false);
					break;
				}
			}
		})
	}

	function onTouchStart() {
		syRef.current = yRef.current;
	}

	return (
		<View className='movable-page'>
			<Map
				className='map'
				latitude={31.123435}
				longitude={121.363556}
				show-location
			/>
			<Movable>
				<View>
					<View className='module module--1'>司机正在赶来</View>
					<View className='module module--2'>寻找拼友中</View>
					<View className='module module--3'>资源位</View>
				</View>
			</Movable>
		</View>
	)
}
