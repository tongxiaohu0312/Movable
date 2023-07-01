/* eslint-disable react/jsx-indent-props */
import { useEffect, useState } from 'react';
import { MovableArea, MovableView, View } from '@tarojs/components'
import './index.less';

export default function MovablePage() {
	const [y, setY] = useState(0);
	const [sv, setSV] = useState(1);

	useEffect(() => {
		let timer: NodeJS.Timeout;
		timer = setTimeout(() => {
			setY(100);
			setSV(2);
		}, 1000);
		return () => {
			clearTimeout(timer);
		}
	}, [])

	return (
		<View className='movable-page'>
			<View className='title title--1'>情况1：正常的MovableArea和MovableView的使用</View>
			<MovableArea className='ma normal' scale-area>
				<MovableView
					className='mv normal'
					direction='vertical'
					inertia
					// outOfBounds
					y={y}
					damping={50}
					friction={50}
					// disabled
					scale
					scale-value={sv}
					// animation={false}
					onChange={(e) => {
						// console.log(e);
					}}
				/>
			</MovableArea>

			<View className='title title--3'>情况3-1互相交叉：{"w(MV)>w(MA) 且 h(MV)<h(MA)"}</View>
			<MovableArea className='ma cross'>
				<MovableView
					className='mv cross'
					direction='all'
				/>
			</MovableArea>

			<View className='title title--4'>情况4：MA是个不可见的点</View>
			<MovableArea className='ma invisible-dot'>
				<View className='ma--fake'></View>
				<View className='move-range'></View>
				<MovableView
					className='mv'
					direction='all'
				/>
			</MovableArea>

			<View className='title title--5'>情况5：MA是一条不可见的竖直线段</View>
			<MovableArea className='ma invisible-vertical-line'>
				<View className='ma--fake'></View>
				<MovableView
					className='mv'
					direction='all'
				/>
			</MovableArea>

			<View className='title title--5'>情况6：MA是一条不可见的水平线段</View>
			<MovableArea className='ma invisible-horizontal-line'>
				<View className='ma--fake'></View>
				<MovableView
					className='mv'
					direction='all'
				/>
			</MovableArea>


			<View className='title title--5'>
				情况7：MA是一个不可见的点,MV也是一个不可见的点
			</View>
			<MovableArea className='ma invisible-dot'>
				<MovableView className='mv invisible-dot' direction='all'>
					<View className='children'></View>
				</MovableView>
			</MovableArea>

			<View className='title title--5'>
				情况8：MA是一个不可见的点,MV是一条不可见的水平线段
			</View>
			<MovableArea className='ma invisible-dot'>
				<MovableView 
				className='mv invisible-horizontal-line' direction='all'>
					<View className='children'></View>
				</MovableView>
			</MovableArea>

			<View className='title title--5'>
				情况9：MA是一个不可见的点,MV是一条不可见的竖直线段
			</View>
			<MovableArea className='ma invisible-dot'>
				<MovableView 
				className='mv invisible-vertical-line' direction='all'>
					<View className='children'></View>
				</MovableView>
			</MovableArea>


			<View className='title title--5'>
				情况10：MA是一个不可见的点,MV是一条不可见的竖直线段
			</View>
			<MovableArea className='ma invisible-dot'>
				<MovableView 
				className='mv invisible-vertical-line' direction='all'>
					<View className='children'></View>
				</MovableView>
			</MovableArea>

			<View className='title title--5'>
				情况11：MA是一条0横线,MV是一个0点
			</View>
			<MovableArea className='ma invisible-horizontal-line'>
				<MovableView 
					className='mv invisible-dot' 
					direction='all'
				>
					<View className='children'></View>
				</MovableView>
			</MovableArea>

			<View className='title title--5'>
				情况11：MA是一条0横线,MV是一个0竖线
			</View>
			<MovableArea className='ma invisible-horizontal-line'>
				<MovableView 
					className='mv invisible-vertical-line' 
					direction='all'
				>
					<View className='children'></View>
				</MovableView>
			</MovableArea>





		</View>
	)
}
