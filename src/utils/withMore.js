import React, { PureComponent } from 'react';
import styled from 'styled-components';

const DefaultLoadMoreButton = styled.button``;

export default (WrappedComponent, LoadMoreButton = DefaultLoadMoreButton) => {
  return class extends PureComponent {
    state = {
      displayedItems: 5,
    };

    loadMore = () => {
      this.setState(state => ({
        displayedItems: state.displayedItems + 5,
      }));
    };

    renderItems(items) {
      return items.map(item => {
        const key = item.id ? item.id : item;
        return <WrappedComponent {...this.props} key={key} item={item} />;
      });
    }

    render() {
      const isMoreToLoad = this.state.displayedItems < this.props.items.length;

      return (
        <React.Fragment>
          {this.props.items.length > 0 &&
            this.renderItems(
              this.props.items.slice(0, this.state.displayedItems)
            )}
          {isMoreToLoad && (
            <LoadMoreButton onClick={this.loadMore}>
              Load More - {this.props.items.length - this.state.displayedItems}{' '}
              Remaining
            </LoadMoreButton>
          )}
        </React.Fragment>
      );
    }
  };
};
