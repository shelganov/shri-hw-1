import Store from './Store';
import AppDispatcher from './Dispatcher';

const removeCardAction = {
    type: 'REMOVE_CARD',
    payload: {
        card: 'id'
    }
};

function handlerAction1() {
    let data = 5;
    return data;
}

localStorage.setItem('cardId', '1')
localStorage.setItem('cardId', '2')
const data = localStorage.getItem('cardId')

const cardStore = new Store(1);
// AppDispatcher.register(removeCardAction, handlerAction1);


// setTimeout(() => {
//     AppDispatcher.dispatch(removeCardAction)
// }, 1000);