import { action, observable } from "mobx";

export default class TodoInputStore {
	constructor() {
		this.todoTitle = '';
	}

	@observable todoTitle: string = '';

	@action.bound setTodoTitle(title: string) {
		this.todoTitle = title;
	}
}