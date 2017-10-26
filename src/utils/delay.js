import {DEBOUNCE_DELAY} from '../constants/values';

const delay = (ms = DEBOUNCE_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

export default delay;