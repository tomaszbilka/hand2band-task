import { useState } from "react";
import ReactDOM from "react-dom";
import PhotoItem from "../PhotoItem/PhotoItem";
import PhotoModal from "../PhotoModal/PhotoModal";
import classes from "./PhotoGrid.module.css";

const PhotoGrid = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const photos = props.data;

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setModalPhoto(null);
  };

  const onClickHandler = (id) => {
    const clickedPhoto = photos.filter((el) => el.id === id);
    setModalPhoto(clickedPhoto);
    setIsModalOpen(true);
  };

  return (
    <main>
      <ul className={classes.grid}>
        {photos?.map((el) => (
          <PhotoItem photo={el} onClickHandler={onClickHandler} key={el.id} />
        ))}
      </ul>
      {isModalOpen &&
        ReactDOM.createPortal(
          <PhotoModal photo={modalPhoto} close={closeModalHandler} />,
          document.getElementById("modal")
        )}
    </main>
  );
};

export default PhotoGrid;
