import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetDataQuery } from "../../../slices/dataApi";

export default function Status(props) {
  const { data, error, isLoading } = useGetDataQuery(props.query);
  if (error) console.error("error:", error);
  console.info("loading status:", isLoading);

  return (
    <>
      <div className="status__container">
        <div className="status container">
          {data &&
            data?.map((state) => (
              <div key={state.key.toString()} className="state">
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
