import React, {Component} from 'react'

import {getArtistEvents} from '../api/services/artists';

const baseState = {
  events: [],
  fetching: false,
  writing: false,
  filtered: false
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

  apiRequest = async(value) => {
    this.setState({fetching: true, writing: false});
    const events = await getArtistEvents(value);
    this.setState({events, fetching: false});
  }

  onSearch = ({value, writing}) => {
    const {events} = this.state;
    if (writing && value) {
      this.setState({writing, filtered: true, events: events.length ? [] : events});
    } else if (value) {
      this.apiRequest(value);
    } else {
      this.setState({...baseState});
    }
  }

  render() {
    return (<T {...this.state} onSearch={this.onSearch}/>)
  }
};

export default container;