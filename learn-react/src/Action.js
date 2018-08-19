import * as ActionTypes from './ActionType.js';
import AppDispatcher from './AppDispatcher.js';

// action两个构造函数 increment/decrement
// 函数被调用时，创建action对象，dispatch出去
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