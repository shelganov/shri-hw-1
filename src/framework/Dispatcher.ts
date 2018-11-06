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
    // _ID: number;

    constructor() {
        // this._actions = {};
        // this._callbacks = {};
        // this._ID = 0;
        this._container = {};
    }

    /**
     * Срабатываение коллбеков из Store
     * @param {} action - событие от View
     */
    dispatch(action: { type: string; payload: { card: any; }; }): any {
        this._container[action.type].forEach(function (handler) {
            // @ts-ignore
            handler(action.payload);
        })
    }

    /**
     * Регистрация коллбеков
     * @param actionType
     * @param callback
     */
    register (actionType: any, callback: any): void {
        if (!this._container[actionType])
            this._container[actionType] = [];

        this._container[actionType].push(callback);
    }
}

export default Dispatcher;
