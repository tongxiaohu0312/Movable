/* eslint-disable react/jsx-indent-props */
import { Button, Input, View } from '@tarojs/components'
import { useContext } from 'react';
import { observer } from 'mobx-react';
import { TodoPageStoreContext } from '../TodoPage.store';

export default observer(
	function TodoInput() {
		const store = useContext(TodoPageStoreContext);
		const service = store.todoInputService;
		const model = service.model;
		
		return (
			<View>
				<Input 
					type='text' 
					placeholder='What needs to be done?' 
					value={model.todoTitle} 
					onInput={(e) => {service.input(e.detail.value)}}
				/>
				<Button onClick={() => {service.confirm(model.todoTitle)}}>确定</Button>
			</View>
		)
	}
)
