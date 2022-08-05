import RoomCard from "./RoomCard";
import { useGetDataQuery } from "../../slices/dataApi";
import { useNavigate } from "react-router-dom";

export default function Rooms(props) {
  const { data, error, isLoading } = useGetDataQuery(props.query);
  if (error) console.error("error:", error);
  console.info("loading status:", isLoading);
  const navigate = useNavigate();

  return (
    <>
      <div className="rooms container">
        <div className="header">
          <h1 className="title">rooms</h1>
          <h5 className="subtitle">60 minutes.. and the clock is ticking</h5>
        </div>
        <div className={`rooms__container ${props.home ? "" : "fix_rooms"}`}>
          {data &&
            data?.map((room) => (
              <RoomCard
                key={room.id.toString()}
                text={room.caption}
                image={room.image}
                navigation={room.navigation}
                title={room.title}
                description={room.description}
                room={room}
              />
            ))}
        </div>
        {props.home && (
          <div className="more-rooms">
            <button
              className="btn more-rooms__btn button"
              onClick={() => {
                navigate("/rooms");
              }}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              view more
            </button>
          </div>
        )}
      </div>
    </>
  );
}
