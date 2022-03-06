import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input/Input";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";
import ErrorMsg from "../components/UI/ErrorMsg/ErrorMsg";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import useHttp from "../hooks/use-http.js";

const SearchPage = () => {
  const { query } = useParams();
  const [sendRequest, data, isLoading, error] = useHttp();

  useEffect(() => {
    sendRequest(query);
  }, [query]);

  return (
    <>
      <Input />
      {!isLoading && !error && <PhotoGrid data={data} />}
      {isLoading && !error && <LoadingSpinner />}
      {!isLoading && error && <ErrorMsg message={error} color='black' />}
    </>
  );
};

export default SearchPage;
