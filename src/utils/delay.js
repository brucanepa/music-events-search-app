import {DEBOUNCE_DELAY} from './constants';

const delay = (ms = DEBOUNCE_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

export default delay;