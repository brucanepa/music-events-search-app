import React, {Component} from 'react'
import PropTypes from 'prop-types';

import dictionary from '../constants/dictionary';
import {getDate, getHour} from '../utils/datetime';

const container = T => class Event extends Component {
  static propTypes = {
    artist_event_id: PropTypes.string.isRequired,
    artist_id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    venue: PropTypes
      .shape({name: PropTypes.string, country: PropTypes.string, city: PropTypes.string})
      .isRequired,
    lineup: PropTypes
      .arrayOf(PropTypes.string)
      .isRequired
  }

  shouldComponentUpdate(nextProps) {
    const {artist_event_id} = this.props;
    return artist_event_id != nextProps.artist_event_id;
  }

  render() {
    const {datetime} = this.props;
    const date = getDate(datetime);
    const hour = getHour(datetime);
    return (<T {...this.props} date={date} hour={hour}/>)
  }
};

export default container;