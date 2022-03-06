import { useState, useCallback } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});

const useCollections = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((inputedQuery) => {
    setIsLoading(true);
    api.search
      .getCollections({
        query: inputedQuery,
        perPage: 30,
      })
      .then((result) => {
        const formattedData = result.response.results.map((el) => {
          return {
            title: el.title,
          };
        });

        let arrayData = [];

        for (const item of formattedData) {
          arrayData.push(item.title.toLowerCase());
        }

        const finalData = arrayData.filter(
          (el, index) => arrayData.indexOf(el) === index
        );

        setData(finalData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return [sendRequest, data, isLoading, error];
};

export default useCollections;
