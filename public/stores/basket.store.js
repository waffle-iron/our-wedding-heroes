import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../constants/actionTypes.constants';
import BaseStore from './base.store.js';

class BasketStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._items = [];
    }

    get items() {
        return this._items;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ADD_TO_BASKET:
                const existingItemIndex = this._items.findIndex(item => item._id === action.item._id);

                if (existingItemIndex === -1) {
                    this._items.push(Object.assign({}, action.item, {quantity: 1}));
                } else {
                    const existingItem = this._items[existingItemIndex];
                    existingItem.quantity += 1;
                }

                this.emitChange();
                break;

            case REMOVE_FROM_BASKET:
                const index = this._items.findIndex(item => item._id === action.item._id);
                this._items.splice(index, 1);
                this.emitChange();
                break;

            default:
                break;
        }
    }
}

export default new BasketStore();