import TodoInputStore from "../models/todo-Input-model";

interface Options {
	onConfirm: (title: string) => void
}

export default class TodoInputService {
	constructor(options: Options) {
		this.options = options;
		this.model = new TodoInputStore()
	}

	model: TodoInputStore

	options: Options

	input(title) {
		this.model.setTodoTitle(title);
	}

	confirm(title: string) {
		// 可能有一些校验
		this.options.onConfirm(title);
		this.input('');
	}
}