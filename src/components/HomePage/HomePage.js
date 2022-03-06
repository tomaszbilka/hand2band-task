import { useState, useEffect } from "react";
import Input from "../Input/Input";
import PhotoAuthor from "../PhotoAuthor/PhotoAuthor";
import SearchItems from "../SearchItems/SearchItems";
import classes from "./HomePage.module.css";
import { link, author } from "../../utils/variables";
import useCollections from "../../hooks/use-collections";
import ErrorMsg from "../UI/ErrorMsg/ErrorMsg";

let initialization = true;

const HomePage = () => {
  const [inputText, setInputText] = useState();
  const [sendRequest, data, isLoading, error] = useCollections();

  useEffect(() => {
    if (!initialization) {
      if (inputText?.length >= 3) {
        sendRequest(inputText);
      }
    }
    initialization = false;
  }, [inputText, sendRequest]);

  const searchHandler = (text) => {
    setInputText(text);
  };

  return (
    <>
      <section className={classes.container}>
        <div className={classes.title}>
          <h1>Unsplash API</h1>
          <p>
            The internet's source of <span>freely-usable images.</span>
          </p>
        </div>
        <div className={classes.search}>
          <Input searchHandler={searchHandler} />
          {!isLoading && !error && (
            <SearchItems searchingText={inputText} data={data} />
          )}
          {isLoading && !error && <p>Searching...</p>}
          {!isLoading && error && <ErrorMsg message={error} color='white' />}
        </div>
        <PhotoAuthor link={link} author={author} />
      </section>
    </>
  );
};

export default HomePage;
