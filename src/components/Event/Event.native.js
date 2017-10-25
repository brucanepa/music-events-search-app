import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {ListItem, Text, Body, Right} from 'native-base';

import dictionary from '../../utils/dictionary';
import {getDate, getHour} from '../../utils/datetime';

class EventsList extends Component {
  static propTypes = {
    artist_event_id: PropTypes.string.isRequired,
    artist_id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
    venue: PropTypes
      .shape({name: PropTypes.string, country: PropTypes.string, city: PropTypes.string})
      .isRequired,
    lineup: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  shouldComponentUpdate(nextProps) {
    const {artist_event_id} = this.props;
    return artist_event_id != nextProps.artist_event_id;
  }

  render() {
    const {venue, datetime, lineup} = this.props;
    const {name, country, city} = venue;
    return (
      <ListItem>
        <Body>
          <Text>{lineup[0]}</Text>
          <Text note>{name}</Text>
          <Text note>{city}</Text>
          <Text note>{country}</Text>
        </Body>
        <Right>
          <Text note>{getDate(datetime)}</Text>
          <Text note>{getHour(datetime)}</Text>
        </Right>
      </ListItem>
    )
  }
}

export default EventsList;