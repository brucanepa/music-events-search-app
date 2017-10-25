import {getArtistEventsUrl} from '../uris';
import {getHttp} from '../../utils/httpHelper';
import {USE_API_OFFLINE} from '../config';
import {getArtistEvents as getArtistEventsOffline} from '../offline/artists';

export const getArtistEvents = (artistName) => {
  return USE_API_OFFLINE
    ? getArtistEventsOffline()
    : getHttp(getArtistEventsUrl(artistName));
};