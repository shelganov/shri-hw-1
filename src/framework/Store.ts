// import AppDispatcher from './Dispatcher';

import AppDispatcher from "./Dispatcher";

/**
 * Хранилище
 * Хранит данные, методы получения этих данных и зарегистрированные в Диспетчере обработчики Действий
 */
class Store {
    data: {};

    constructor(state: any) {
        this.data = state;
    }
}

export default Store;
