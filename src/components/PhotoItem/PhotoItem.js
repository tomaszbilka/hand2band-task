import classes from "./PhotoItem.module.css";

const PhotoItem = (props) => {
  const { user, urls, id, alt } = props.photo;

  const showImageModalHandler = () => {
    props.onClickHandler(id);
  };

  return (
    <li key={id} className={classes.item}>
      <img
        className={classes.img}
        src={urls.small}
        alt={alt}
        onClick={showImageModalHandler}
      />
      <a
        className={classes.credit}
        target='_blank'
        href={`https://unsplash.com/@${user.username}`}
        rel='noreferrer'
      >
        {user.name}
      </a>
    </li>
  );
};

export default PhotoItem;
