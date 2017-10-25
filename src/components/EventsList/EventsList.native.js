import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Content, List, ListItem, Text} from 'native-base';

import Spinner from '../Spinner/Spinner.native';
import Event from '../Event/Event.native';
import dictionary from '../../utils/dictionary';

class EventsList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    filtered: PropTypes.bool.isRequired
  }

  shouldComponentUpdate(nextProps) {
    const {fetching, data, filtered} = this.props;
    return fetching != nextProps.fetching || data != nextProps.data || filtered != nextProps.filtered;
  }

  showList() {
    const {data, filtered} = this.props;

    if (!data.length && filtered) {
      return <Text>{dictionary.artists.notFound}</Text>
    }

    return <List scrollEnabled>{data.map(item => {
        return <Event key={item.id} {...item}/>
      })}</List>
  }

  showData() {
    const {fetching} = this.props;
    return fetching
      ? <Spinner/>
      : this.showList();
  }

  render() {
    return (
      <Content>
        {this.showData()}
      </Content>
    )
  }
}

export default EventsList;