import React, {Component} from 'react'

import {getArtistEvents, getArtist} from '../api/services/artists';

const baseState = {
  events: [],
  fetching: false,
  writing: false,
  filtered: false,
  error: false
};

const container = T => class EventsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...baseState
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {events, fetching, writing} = this.state;
    return events != nextState.events || fetching != nextState.fetching || writing != nextState.writing;
  }

  saveEvent = async(value) => {
    this.setState({fetching: true, writing: false});
    const eventsResult = await getArtistEvents(value);
    if (eventsResult.success) {
      this.setState({events: eventsResult.data, fetching: false});
    } else {
      this.setState({error: true, fetching: false});
    }
  }

  onSearch = ({value, writing}) => {
    const {events} = this.state;
    if (writing && value) {
      this.setState({writing, filtered: true, events: events.length ? [] : events, error: false});
    } else if (value) {
      this.saveEvent(value);
    } else {
      this.setState({...baseState});
    }
  }

  render() {
    return (<T {...this.state} onSearch={this.onSearch}/>)
  }
};

export default container;