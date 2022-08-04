import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content">
          <div className="location frag">
            <FontAwesomeIcon
              icon="map-location-dot"
              className="react-icon"
              style={{
                fontSize: "40px",
                marginRight: "10px",
                color: "#fdb713",
              }}
            />
            <span>07201 Cir burg</span>
          </div>
          <div className="phone frag">
            <FontAwesomeIcon
              icon="phone"
              className="react-icon"
              style={{
                fontSize: "40px",
                marginRight: "10px",
                color: "#fdb713",
              }}
            />
            <span>(227) 970-1219</span>
          </div>
          <div className="email frag">
            <FontAwesomeIcon
              icon="at"
              className="react-icon"
              style={{
                fontSize: "40px",
                marginRight: "10px",
                color: "#fdb713",
              }}
            />
            <span>info@roomx.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}
