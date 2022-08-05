import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetDataQuery } from "../../../slices/dataApi";

export default function Status(props) {
  const { data, error, isLoading } = useGetDataQuery(props.query);

  return (
    <>
      <div className="status__container">
        <div className="status container">
          {/* <div className="state">
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
          </div> */}
          {data &&
            data?.map((state) => (
              <div className="state">
                <p className="number">{state.number}</p>
                <p className="indicator">{state.indicator}</p>
                <FontAwesomeIcon
                  icon={state.icon}
                  className="react-icon"
                  style={{ fontSize: "22px" }}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
