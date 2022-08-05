import VideoBanner from "./content/VideoBanner";
import HowToPlay from "./content/how to play/HowToPlay";
import Status from "./content/Status";
import Rooms from "../generics/Rooms";

export default function Home(props) {
  return (
    <>
      <VideoBanner />
      <HowToPlay />
      <Status query="stats" />
      <Rooms query="rooms/3" home />
    </>
  );
}
