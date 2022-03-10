import { useState, useCallback } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});

const useHttp = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((inputedQuery) => {
    setIsLoading(true);
    api.search
      .getPhotos({
        query: inputedQuery,
        perPage: 30,
        orientation: "landscape",
      })
      .then((result) => {
        const formattedData = result.response.results.map((el) => {
          return {
            alt: el.alt_description,
            created: el.created_at,
            id: el.id,
            links: el.links,
            urls: el.urls,
            //title: el.tags[0].title,
            user: el.user,
            //place: el.tags[1].title,
          };
        });

        setData(formattedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return [sendRequest, data, isLoading, error];
};

export default useHttp;
