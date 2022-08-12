import React from 'react';
import axios from 'axios';

export const useFetch = (url) => {

  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {

    const calcelToken = axios.CancelToken.source();

    axios.get(url, { cancelToken: calcelToken.token })

      .then(response => { setData(response.data) })

      .catch(error => {
        if (axios.isCancel(error)) return;
        setError(error);
      })

      .finally(() => { setIsFetching(false) });

    return () => {

      calcelToken.cancel();

    };

  }, [])

  return { data, isFetching, error };
}