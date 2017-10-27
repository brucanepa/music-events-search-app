import React from 'react'
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

export default container(EventItem);