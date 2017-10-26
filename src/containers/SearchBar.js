import React, {Component} from 'react';
import PropTypes from 'prop-types';

import debounce from '../utils/debounce';

const container = T => class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      trigger: debounce({callback: props.onSearch}),
      value: ''
    }
  }

  onSearch = async(value) => {
    this.setState({value})
    this.state.trigger({value});
  }

  onPullToRefresh = () => {
    trigger({value: this.state.value, force: true});
  }

  render() {
    return <T onSearch={this.onSearch} onPullToRefresh={this.onPullToRefresh}/>
  }
};

export default container;