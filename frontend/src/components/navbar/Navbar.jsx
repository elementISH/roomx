import { useMediaQuery } from "react-responsive";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
export default function Navbar() {
  const responsive = useMediaQuery({ query: "(max-width: 700px)" });

  return <>{responsive ? <Mobile /> : <Desktop />}</>;
}
