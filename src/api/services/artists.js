import {getArtistEventsUrl} from '../uris';
import {getHttp, networkError} from '../../utils/httpHelper';
import {USE_API_OFFLINE} from '../config';
import {getArtistEvents as getArtistEventsOffline} from '../offline/artists';

export const getArtistEvents = async(artistName) => {
  if (USE_API_OFFLINE) {
    return getArtistEventsOffline();
  }
  const result = await getHttp(getArtistEventsUrl(artistName));
  const success = !networkError(result);
  return {success , data: success ? result : [] };
};