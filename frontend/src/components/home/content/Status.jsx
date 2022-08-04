import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Status() {
  return (
    <>
      <div className="status__container">
        <div className="status container">
          <div className="state">
            <p className="number">6</p>
            <p className="indicator">rooms</p>
            <FontAwesomeIcon
              icon="arrow-right-to-bracket"
              className="react-icon"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="state">
            <p className="number">275</p>
            <p className="indicator">locks</p>
            <FontAwesomeIcon
              icon="lock"
              className="react-icon"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="state">
            <p className="number">35132</p>
            <p className="indicator">players</p>
            <FontAwesomeIcon
              icon="users"
              className="react-icon"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="state">
            <p className="number">60</p>
            <p className="indicator">mins</p>
            <FontAwesomeIcon
              icon="hourglass-half"
              className="react-icon"
              style={{ fontSize: "22px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
