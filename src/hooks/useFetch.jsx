import React from 'react';
import axios from 'axios';

export const useFetch = (url) => {

  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(url)
      .then(response => { setData(response.data) })
      .catch(error => { setError(error) })
      .finally(() => { setIsFetching(false) })
  }, [])

  return { data, isFetching, error };
}