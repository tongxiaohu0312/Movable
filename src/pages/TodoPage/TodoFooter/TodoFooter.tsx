/* eslint-disable react/jsx-indent-props */
import { View } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useContext } from 'react';
import { TodoPageStoreContext } from '../TodoPage.store'

export default observer(
	function TodoFooter() {
		const pageStore = useContext(TodoPageStoreContext);
		const todoFooterService = pageStore.todoFooterService;

		return (
			<View>
				{
				todoFooterService.model.options.map((option, index) => (
					<View 
						key={index} 
						onClick={() => {todoFooterService.changeType(option)}} 
						style={{color: todoFooterService.model.type === option ? 'red' : 'black'}}
					>{option}
					</View>))
				}
			</View>
		)
	}
)
