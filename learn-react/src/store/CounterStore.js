import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionType.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function(){
        return counterValues;
    },
    // 广播特定事件
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    // 增加 挂在该事件上的 处理函数
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    // 移除 特定事件上的 处理函数
    removeChangeListener: function(callback){
        this.remove(CHANGE_EVENT, callback);
    }
});

CounterStore.dispatcheToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption] ++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption] --;
        CounterStore.emitChange();
    }
});

export default CounterStore;