/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { action } from "mobx";
import TodoService from "../../modules/services/todo-service";
import TodoInputService from "../../modules/services/todo-input-service";
import TodoFooterService from "../../modules/services/todo-footer-service";

export default class TodoPageStore {
	constructor() {
		this.todoService = new TodoService();
		// 依赖交互，而非数据变化
		this.todoInputService = new TodoInputService({
			onConfirm: this.onConfirmTitle
		});
		this.todoFooterService = new TodoFooterService();
	}

	todoService: TodoService

	todoInputService: TodoInputService

	todoFooterService: TodoFooterService

	@action.bound onConfirmTitle(title: string) {
		if (title) {
			this.todoService.add(title);
		}
	}
}

export const TodoPageStoreContext = createContext<TodoPageStore>(null as unknown as TodoPageStore);
