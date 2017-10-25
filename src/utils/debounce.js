import {DEBOUNCE_DELAY} from './constants';

const debounce = ({callback,  delay = DEBOUNCE_DELAY, force = false}) => {
  let delayTimer;
  return ({value, force}) => {
    clearTimeout(delayTimer);

    if (force) return callback({value, force});

    delayTimer = setTimeout(() => {
      if (callback) {
        callback({value});
      }
    }, delay);

    callback({waiting: true, value});
  }
};

export default debounce;