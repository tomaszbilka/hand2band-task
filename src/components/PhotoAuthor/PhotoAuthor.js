import classes from "./PhotoAuthor.module.css";

const PhotoAuthor = (props) => {
  const { author, link } = props;

  return (
    <div className={classes.authorWrap}>
      <p className={classes.text}>Photo by</p>
      <a
        href={author}
        target='_blank'
        className={classes.link}
        rel='noreferrer'
      >
        Claudio Testa
      </a>
      <p className={classes.text}>on</p>
      <a href={link} target='_blank' className={classes.link} rel='noreferrer'>
        Unsplash
      </a>
    </div>
  );
};

export default PhotoAuthor;
