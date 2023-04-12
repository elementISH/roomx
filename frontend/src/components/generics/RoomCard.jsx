import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

export default function RoomCard(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  function handleAddToCart(room) {
    dispatch(addToCart(room));
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2500);
  }

  return (
    <>
      <div className="card">
        <figure className="effect-apollo add-pointer">
          <img src={props.image} className="card__img" alt="" />
          <figcaption className="subtitle">
            <p className="main-text">{props.text}</p>
            <p className="card--anchor">read more</p>
          </figcaption>
        </figure>
        <div className="content">
          <div className="content__header">
            <span className="header__title">{props.title}</span>
          </div>
          <div className="description">
            <p className="description__text">{props.description}</p>
          </div>
          <button
            onClick={() => {
              handleAddToCart(props.room);
            }}
            className={`btn room-booking__btn add-pointer ${
              clicked && "clicked"
            }`}
          >
            <span className="booking btn-text">Book Now</span>
            <span className="booked btn-text">booked!</span>
            <FontAwesomeIcon
              icon="bag-shopping"
              className="react-icon shopping-cart"
              style={{ fontSize: "22px" }}
            />
            <FontAwesomeIcon
              icon="box"
              className="react-icon box"
              style={{ fontSize: "22px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
