import { useState } from "react";
import classes from "./Input.module.css";
import searchIcon from "../../imgs/search.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Input = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setEnteredText(event.target.value);
    props.searchHandler(event.target.value);
  };

  const enterHandler = (event) => {
    if (event.charCode === 13) {
      navigate(`/search/${enteredText}`);
      setEnteredText("");
    }
  };

  return (
    <div className={classes.wrap}>
      <Link to='/'>
        <img src={searchIcon} className={classes.icon} alt='search icon'></img>
      </Link>
      <input
        type='text'
        className={classes.search}
        value={enteredText}
        onChange={inputHandler}
        onKeyPress={enterHandler}
        placeholder='start searching an image and hit enter!'
      ></input>
    </div>
  );
};

export default Input;
