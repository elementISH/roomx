import logo from "../../content/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Desktop() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="left-section">
          <div
            className="logo add-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="image-container">
              <img className="image" src={logo} alt="" />
            </div>
            <div className="name-container">
              <span className="name">roomx</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          <ul className="nav-links">
            <li className="nav-link">
              <p
                className="link add-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                home
              </p>
            </li>
            <li className="nav-link">
              <a className="link add-pointer" href="/#howtoplay">
                how to play
              </a>
            </li>
            <li className="nav-link">
              <p
                className="link add-pointer"
                onClick={() => {
                  navigate("/rooms");
                }}
              >
                rooms
              </p>
            </li>
            <li className="nav-link">
              <p
                className="link add-pointer"
                onClick={() => {
                  navigate("/faq");
                }}
              >
                faq
              </p>
            </li>
            <li className="nav-link last">
              <p
                className="link add-pointer"
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
        </div>
      </nav>
    </>
  );
}
