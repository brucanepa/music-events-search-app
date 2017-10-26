import {DEBOUNCE_DELAY} from '../constants/values';

const debounce = ({callback,  delay = DEBOUNCE_DELAY, force = false}) => {
  let delayTimer;
  return ({value, force}) => {
    clearTimeout(delayTimer);

    if (force) return callback({value, force, writing: false});

    delayTimer = setTimeout(() => {
        callback({value, writing: false});
    }, delay);

    callback({writing: !!value, value});
  }
};

export default debounce;