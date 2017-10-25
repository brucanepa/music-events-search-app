const getHeaders = () => ({'Accept': 'application/json', 'Content-Type': 'application/json'});

const createRequest = (url) => {
  return new Request(url, {
    method: 'GET',
    headers: new Headers(getHeaders())
  });
}

export const getHttp = (url) => {
  return fetch(createRequest(url))
    .then(response => response.json())
    .catch(error => error);
};