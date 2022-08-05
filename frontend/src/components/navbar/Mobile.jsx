import logo from "../../content/images/logo.png";
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
          >
            rooms
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/faq");
            }}
          >
            faq
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              navigate("/cart");
            }}
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
