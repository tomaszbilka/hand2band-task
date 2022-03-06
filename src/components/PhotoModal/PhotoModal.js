import classes from "./PhotoModal.module.css";

const PhotoModal = (props) => {
  const { user, urls, alt, created, place, links } = props.photo[0];

  const date = new Date(created).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
  });

  const handleClose = () => {
    props.close();
  };

  return (
    <div className={classes.wrap}>
      <a
        target='_blank'
        href={links.html}
        rel='noreferrer'
        className={classes.linkimg}
      >
        <img className={classes.img} src={urls.regular} alt={alt} />
      </a>
      <div className={classes.info}>
        <a
          className={classes.credit}
          target='_blank'
          href={`https://unsplash.com/@${user.username}`}
          rel='noreferrer'
        >
          Author: {user.name}
        </a>
        <p className={classes.place}>{place ? place : ""}</p>
        <p className={classes.date}>Date: {date}</p>
      </div>
      <div className={classes.close} onClick={handleClose}>
        x
      </div>
    </div>
  );
};

export default PhotoModal;
