import classes from "./NotFoundPage.module.css";
import notFoundImage from "../../imgs/notFoundImage.svg";

const NotFoundPage = () => {
  return (
    <div className={classes.not}>
      <h2>Hmm... it looks that we cant find your page.</h2>
      <img className={classes.img} src={notFoundImage} alt='problem'></img>
    </div>
  );
};

export default NotFoundPage;
