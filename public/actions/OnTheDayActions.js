import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/onTheDay.api';
import { ON_THE_DAY as key } from '../constants/keys.constants';

class OnTheDayActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(OnTheDayActions);
