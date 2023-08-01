/* eslint-disable react/jsx-indent-props */
import { MovableArea, MovableView, View } from '@tarojs/components'
import './index.less'

type MovableProps = {
	children: React.ReactNode
}

export default function Movable(props: MovableProps) {
	return (
		<MovableArea className='movable-area'>
			<MovableView 
				className='movable-view'
				direction='all'
				y={-400}
			>
				<View className='content'>
					{props.children}
				</View>
			</MovableView>
		</MovableArea>
	)
}
