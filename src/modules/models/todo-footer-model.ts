import { action, observable } from "mobx"

export default class TodoFooterStore {
	options: ['all', 'completed', 'active'] = ['all', 'completed', 'active']

	@observable type: 'all' | 'completed' | 'active' = 'all'

	@action.bound setType(type: 'all' | 'completed' | 'active') {
		this.type = type
	}
}