import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, Text, Body, Right} from 'native-base';

import container from '../../containers/EventItem';

const EventItem = ({venue, date, hour, lineup}) => {
  const {name, country, city} = venue;
  const artist = lineup[0];
  return (
    <ListItem>
      <Body>
        <Text>{artist}</Text>
        <Text note>{name}</Text>
        <Text note>{city}</Text>
        <Text note>{country}</Text>
      </Body>
      <Right>
        <Text note>{date}</Text>
        <Text note>{hour}</Text>
      </Right>
    </ListItem>
  )
};

EventItem.propTypes = {
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  venue: PropTypes
    .shape({name: PropTypes.string, country: PropTypes.string, city: PropTypes.string})
    .isRequired,
  lineup: PropTypes
    .arrayOf(PropTypes.string)
    .isRequired
};

export default container(EventItem);