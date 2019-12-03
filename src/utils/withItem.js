import React, { useState, useEffect } from 'react';

import { fetchItem } from './api';

export function useFetchItem(id) {
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchItem(id).then(result => {
      setItem(result);
      setLoading(false);
    });

    return () => {
      setLoading(false);
    };
  }, [id]);

  return [isLoading, item];
}

const DefaultSkeleton = () => <div className="loading">...Loading</div>;

export default (WrappedComponent, Skeleton = DefaultSkeleton) => {
  return props => {
    const [loading, item] = useFetchItem(props.item);

    if (!loading) {
      return <WrappedComponent {...props} {...item} />;
    } else {
      return <Skeleton></Skeleton>;
    }
  };
};
