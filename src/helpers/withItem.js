import React, { PureComponent } from 'react';

import { fetchItem } from '../api';

export default WrappedComponent => {
  return class extends PureComponent {
    fetching = false;

    state = {
      item: null,
    };

    itemFetched = item => {
      if (this.fetching) {
        this.setState({ item });
      }
    };

    componentDidMount() {
      this.fetching = true;
      fetchItem(this.props.item).then(this.itemFetched);
    }

    componentWillUnmount() {
      this.fetching = false;
    }

    render() {
      if (this.state.item) {
        return <WrappedComponent {...this.props} {...this.state.item} />;
      } else {
        return <div className="loading">...Loading</div>;
      }
    }
  };
};
