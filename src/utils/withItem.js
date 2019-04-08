import React, { useState, useEffect } from 'react';

import { fetchItem } from './api';

export function useFetchItem(id) {
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      fetchItem(id).then(result => {
        if (isLoading) {
          setItem(result);
          setLoading(false);
        }
      });
    },
    () => {
      setLoading(false);
    },
    []
  );

  return [isLoading, item];
}

export default WrappedComponent => {
  return props => {
    const [loading, item] = useFetchItem(props.item);

    if (!loading) {
      return <WrappedComponent {...props} {...item} />;
    } else {
      return <div className="loading">...Loading</div>;
    }
  };
};
