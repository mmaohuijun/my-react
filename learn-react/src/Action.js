import * as ActionTypes from './ActionType.js';
import AppDispatcher from './AppDispatcher.js';

// action�������캯�� increment/decrement
// ����������ʱ������action����dispatch��ȥ
export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    })
};

export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
};