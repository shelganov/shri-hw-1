import Dispatcher from './Dispatcher';
import Store from './Store';

class Framework {
    AppDispatcher: any;
    store: any;

    constructor() {
        this.AppDispatcher = new Dispatcher();
    }

    register(action: any, callback: any): void {
        this.AppDispatcher.register(action, callback)
    }

    dispatch(action: any): void {
        this.AppDispatcher.dispatch(action)
    }

    createStore(state: any) {
        this.store = new Store(state);
        return this.store;
    }
}

export default Framework;