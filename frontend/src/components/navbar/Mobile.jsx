import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
  const navigate = useNavigate();

  return (
    <>
      <input type="checkbox" name="" id="" className="check" />
      <ul className="menu-items">
        <li>
          <p
            onClick={() => {
              navigate("/");
            }}
            className="add-pointer"
          >
            Home
          </p>
        </li>
        <li>
          <a href="/#howtoplay">how to play</a>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/rooms");
            }}
            className="add-pointer"
          >
            rooms
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/faq");
            }}
            className="add-pointer"
          >
            faq
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/cart");
            }}
            className="add-pointer"
          >
            <FontAwesomeIcon
              icon="bag-shopping"
              className="react-icon"
              style={{ fontSize: "22px" }}
            />
          </p>
        </li>
      </ul>
      <div className="ham-menu">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </>
  );
}
