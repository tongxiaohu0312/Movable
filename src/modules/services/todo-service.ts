// 这是一个render service，直接处理渲染相关的逻辑
import TodoStore from "../models/todo-model";

export default class TodoService {
	constructor() {
		this.model = new TodoStore();
	}

	model: TodoStore;

	add(title: string) {
		// 可能需要调用接口，就在这里调用
		this.model.add(title);
	}

	remove(id: number) {
		// 可能需要调用接口，就在这里调用
		this.model.remove(id);
	}

	toggle(id: number) {
		// 可能需要调用接口，就在这里调用
		this.model.toggle(id);
	}

	// async loadTodos() {
	// 	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	// 	const json = await response.json();
	// 	this.data.todos = json;
	// }
}