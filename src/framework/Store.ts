// import AppDispatcher from './Dispatcher';

import AppDispatcher from "./Dispatcher";

/**
 * Хранилище
 * Хранит данные, методы получения этих данных и зарегистрированные в Диспетчере обработчики Действий
 */
class Store {
    _data: {}[];

    constructor(state: any) {
        this._data = state;

    }

    createStore(AppDispatcher: any) {
        return Store;
    }

    // subscrube(action: any) {
    //     AppDispatcher.register(action);
    // }




}

export default Store;
