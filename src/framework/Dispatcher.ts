// let obj = {
//     'remove': [callback1, callback2, callback3]
// }

class Dispatcher {
    /**
     * Все коллбеки Store
     */
    // _callbacks: {
    //     [_ID: number]: Object;
    // };
    // _actions: {
    //     [type: string]: Object;
    // };
    _container: {
        [eventType: string]: {}[]
    };
    _ID: number;

    constructor() {
        // this._actions = {};
        // this._callbacks = {};
        this._ID = 0;
        this._container = {};
    }

    /**
     * Получе ние события от View
     * @param {} action - событие
     */
    dispatch(action: { type: string; payload: { card: any; }; }): any {
        this._container[action.type].forEach(function (handler) {
            // @ts-ignore
            handler(action.payload);
        })
        // Вызываем коллбек на триггер action
        // this._container[action.type]();
        // this._data[action.type]();
    }

    /**
     * Регистрация коллбеков
     * @param action
     * @param callback
     */
    register (action: any, callback: any): void {
        this._container[action.type].push(callback);
        // this._callbacks[this._ID++] = callback;
    }
}

const AppDispatcher = new Dispatcher();

export default AppDispatcher;
