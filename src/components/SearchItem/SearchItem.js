import { useNavigate } from "react-router-dom";

import classes from "./SearchItem.module.css";

const SearchItem = (props) => {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/search/${props.name}`);
  };

  return (
    <li onClick={redirectHandler} className={classes.container}>
      {props.name}
    </li>
  );
};

export default SearchItem;
