import React, {Component} from 'react'
import PropTypes from 'prop-types';

import {getDate, getHour} from '../utils/datetime';

const container = T => class EventItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    return false;
  }

  render() {
    const {datetime} = this.props;
    const date = getDate(datetime);
    const hour = getHour(datetime);
    return (<T {...this.props} date={date} hour={hour}/>)
  }
};

export default container;