import { Button, View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useContext } from 'react'
import { TodoPageStoreContext } from '../TodoPage.store'

export default observer(function Todos() {
	const pageStore = useContext(TodoPageStoreContext);
	const todoService  = pageStore.todoService;
	const todoFooterService = pageStore.todoFooterService;

	return (
		<View>
			{
				todoService.model.todos.map((todo, index) => (
					todoFooterService.model.type === 'all' 
					|| (todoFooterService.model.type === 'active' && !todo.completed) 
					|| (todoFooterService.model.type === 'completed' && todo.completed) ? 
					(
						<View key={index}>
						<Text onClick={() => {todoService.toggle(todo.id)}}>
							{todo.completed ? '✅' : '[空]'}
							{todo.title}
						</Text>
						<Button onClick={() => {todoService.remove(todo.id)}}>x</Button>
					</View>
					) : false
				))
			}
		</View>
	)
})
