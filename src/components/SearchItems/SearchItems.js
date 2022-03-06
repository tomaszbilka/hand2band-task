import SearchItem from "../SearchItem/SearchItem";
import classes from "./SearchItems.module.css";

const SearchItems = (props) => {
  const { searchingText, data } = props;

  let filteredData = data?.filter((el) =>
    el.toLowerCase().startsWith(searchingText?.toLowerCase())
  );

  if (searchingText?.length < 3 || !filteredData) {
    filteredData = [];
  }

  if (searchingText?.length >= 3 && filteredData.length === 0) {
    return <p className={classes.suggestion}>no suggestions...</p>;
  }

  const clearHandler = () => {
    filteredData = [];
  };

  return (
    <ul className={classes.container}>
      {filteredData.map((el, index) => {
        return <SearchItem name={el} key={index} clear={clearHandler} />;
      })}
    </ul>
  );
};

export default SearchItems;
