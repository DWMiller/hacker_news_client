import React, { PureComponent } from 'react';

export default WrappedComponent => {
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
            <a className="loadButton" onClick={this.loadMore}>
              Load More - {this.props.items.length - this.state.displayedItems}{' '}
              Remaining
            </a>
          )}
        </React.Fragment>
      );
    }
  };
};
