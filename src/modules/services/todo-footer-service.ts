import TodoFooterStore from "../models/todo-footer-model";

export default class TodoFooterService {
	constructor() {
		this.model = new TodoFooterStore();
	}

	model: TodoFooterStore;

	changeType(type: 'all' | 'completed' | 'active') {
		this.model.setType(type);
	}
}