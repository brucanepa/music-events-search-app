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

  shouldComponentUpdate() {
    return false;
  }

  onSearch = (value) => {
    this.setState({value})
    this.state.trigger({value});
  }

  onCancel = () => {
    this.onSearch('');
  }

  showCancel = () => {
    return !!this.state.value;
  }

  render() {
    return <T
      onSearch={this.onSearch}
      onCancel={this.onCancel}
      showCancel={this.showCancel}/>
  }
};

export default container;