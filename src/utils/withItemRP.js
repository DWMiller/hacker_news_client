import React from 'react';

import { fetchItem } from '../api';

export class WithItem extends React.PureComponent {
  fetchInProgress = false;

  state = {
    loading: true,
    item: null,
  };

  itemFetched = item => {
    if (this.fetchInProgress) {
      this.setState(() => ({
        item,
        loading: false,
      }));
    }
  };

  startFetch() {
    this.fetchInProgress = true;
    fetchItem(this.props.item).then(this.itemFetched);
  }

  componentDidMount() {
    this.startFetch();
  }

  componentWillUnmount() {
    this.fetchInProgress = false;
  }

  render() {
    return this.props.children({
      ...this.state,
    });
  }
}
