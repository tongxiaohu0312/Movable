// 最小单元
import { action, computed, observable } from "mobx";

export class Todo {
	id: number;

	@observable title: string;

	@observable completed: boolean;

	constructor(id: number, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
};

export default class TodoStore {
	constructor() {
		this.id = 0;
		this.todos = [];
	}

	id: number = 0;

	@observable todos: Todo[] = [];

	@computed get activeTodoCount() {
		return this.todos.reduce(
			(sum, todo) => sum + (todo.completed ? 0 : 1),
			0
		);
	}

	@action.bound add(title: string) {
		const todo = new Todo(++this.id, title, false);
		this.todos.push(todo);
	}

	@action.bound remove(id: number) {
		this.todos = this.todos.filter(todo => todo.id !== id);
	}

	@action.bound toggle(id: number) {
		this.todos = this.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	}

	@action.bound clearCompleted() {
		this.todos = this.todos.filter(todo => !todo.completed);
	}

	@action.bound toggleAll() {
		const areAllMarked = this.todos.every(todo => todo.completed);
		this.todos = this.todos.map(todo => {
			todo.completed = !areAllMarked;
			return todo;
		});
	}

	// @action.bound edit(todo: Todo, title: string) {
	// 	this.todos = this.todos.map(_todo => {
	// 		if (_todo === _todo) {
	// 			_todo.title = title;
	// 		}
	// 		return _todo;
	// 	});
	// }

	@action.bound clearAll() {
		this.todos = [];
	}

}

