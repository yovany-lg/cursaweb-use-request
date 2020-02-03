
import { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  data: undefined,
  loading: true,
  error: undefined,
};

function useRequest({ endpoint }) {
  const [requestData, updateData] = useState(initialState);
  useEffect(() => {
    axios
      .get(`http://localhost:3006/${endpoint}`)
      .then(response => {
        console.log(response.data);
        updateData({
          data: response.data,
          loading: false,
          error: undefined,
        });
      })
      .catch(error => {
        updateData({
          data: undefined,
          loading: false,
          error: error.message,
        })
      })
  }, []);

  return requestData
}

export default useRequest;
