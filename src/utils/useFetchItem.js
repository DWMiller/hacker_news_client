import { useState, useEffect } from 'react';

import { fetchItem } from './api';

function useFetchItem(id) {
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

export default useFetchItem;
