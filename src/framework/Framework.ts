import Dispatcher from './Dispatcher';
import Store from './Store';

/**
 * Фреймворк
 */
class Framework {
    AppDispatcher: Dispatcher;
    store: {};

    constructor() {
        this.AppDispatcher = new Dispatcher();
        this.store = {};
    }

    register(action: string, callback: {}): void {
        this.AppDispatcher.register(action, callback)
    }

    dispatch(action: {type: string, payload: {}}): void {
        this.AppDispatcher.dispatch(action)
    }

    createStore(state: {}) {
        this.store = new Store(state);
        return this.store;
    }
}

export default Framework;