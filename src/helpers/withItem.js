import React, { Component } from 'react';

import { fetchItem } from '../api';

export default WrappedComponent => {
  return class extends Component {
    state = {
      item: null,
    };

    componentDidMount() {
      fetchItem(this.props.itemId).then(item => {
        this.setState({ item });
      });
    }

    render() {
      if (this.state.item) {
        return <WrappedComponent {...this.state.item} />;
      } else {
        return <div className="loading">...Loading</div>;
      }
    }
  };
};
