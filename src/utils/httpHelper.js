import {API_TIMEOUT} from '../api/config';

const getHeaders = () => ({'Accept': 'application/json', 'Content-Type': 'application/json'});

const createRequest = (url) => {
  return new Request(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: API_TIMEOUT
  });
}

export const getHttp = (url) => {
  return fetch(createRequest(url))
    .then(response => response.json())
    .catch(error => error);
};