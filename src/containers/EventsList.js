import React, {Component} from 'react'
import PropTypes from 'prop-types';

import dictionary from '../constants/dictionary';

const container = T => class EventsList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    filtered: PropTypes.bool.isRequired
  }

  shouldComponentUpdate(nextProps) {
    const {fetching, data, filtered} = this.props;
    return fetching != nextProps.fetching || data != nextProps.data || filtered != nextProps.filtered;
  }

  showLoading = () => {
    return this.props.fetching;
  }

  showList = () => {
    return this.props.data.length;
  }

  showNotFound = () => {
    const {filtered, fetching} = this.props;
    return filtered && !fetching;
  }

  render() {
    const {data} = this.props;
    return (<T data={data} showLoading={this.showLoading} showList={this.showList} showNotFound={this.showNotFound}/>)
  }
};

export default container;