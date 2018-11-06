import AppDispatcher from './Dispatcher';

const Actions = {

    /**
     * Удаление карточки
     * @param card
     */
    removeCard(card: any): any {
        const action = {
            type: 'REMOVE_CARD',
            payload: {
                card
            }
        };

        AppDispatcher.dispatch(action);
    }
};


export default Actions;