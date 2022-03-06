import classes from "./ErrorMsg.module.css";

const ErrorMsg = (props) => {
  const style = {
    color: props.color,
  };

  return (
    <div className={classes.wrap} style={style}>
      <h3>Upss.. something went wrong!</h3>
      <h4>Send us message below and we will take care about it asap!</h4>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMsg;
