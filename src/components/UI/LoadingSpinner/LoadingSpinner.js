import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Loading...</p>
      <div className={classes.wrap}>
        <div className={classes.outer}></div>
        <div className={classes.inner}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
