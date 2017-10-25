import {BANDSINTOWN_API_URL, API_TOKEN, API_TOKEN_ID} from './config';

export const getArtistEventsUrl = (artistName) => {
  return `${BANDSINTOWN_API_URL}/artists/${artistName}/events/?${API_TOKEN_ID}=${API_TOKEN}`;
};