import { View } from '@tarojs/components'
import TodoPageStore, { TodoPageStoreContext } from './TodoPage.store';
import TodoTable from './TodoTable/TodoTable';
import TodoInput from './TodoInput/TodoInput';
import TodoFooter from './TodoFooter/TodoFooter';

export default function TodoPage() {
	return (
		<TodoPageStoreContext.Provider value={new TodoPageStore()}>
			<View>
				Todo
				<TodoInput></TodoInput>
				<TodoTable></TodoTable>
				<TodoFooter></TodoFooter>
			</View>
		</TodoPageStoreContext.Provider>
	)
}