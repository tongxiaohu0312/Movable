/* eslint-disable react/jsx-indent-props */
import { MovableArea, MovableView, View, Map } from '@tarojs/components'
import { useEffect, useRef, useState } from 'react';

import './index.less';

const h2 = 700;

const h1 = 400;

const h0 = 100;

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
	const [y, setY] = useState(h2);
	const [hidden, setHidden] = useState(false);
	const yRef = useRef(h2);
	const syRef = useRef(yRef.current);

	const [showHeader, setShowHeader] = useState(y === h0);

	function onChange(e) {
		if (yRef.current <= 150 && e.detail.y > 150) {
			setHidden(true)
			console.log('y', e.detail.y);
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
			{
				showHeader && (
					<FadeInOut hidden={hidden}>
						<View className='header'></View>
					</FadeInOut>
				)
			}
			<MovableArea className='movable-area'>
				<MovableView
					direction='all'
					className='movable-view'
					onChange={onChange}
					y={y}
					onTouchEnd={onTouchEnd}
					onTouchStart={onTouchStart}
					inertia
				>
					<View className='movable-view__content'>可拖动的视图</View>
				</MovableView>
			</MovableArea>
		</View>
	)
}
