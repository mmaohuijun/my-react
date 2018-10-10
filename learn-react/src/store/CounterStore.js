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

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    // �Ƴ� �ض��¼��ϵ� ������
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