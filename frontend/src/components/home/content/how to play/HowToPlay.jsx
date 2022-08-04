import HowToPlayTitle from "./HowToPlayTitle";
import InfoBubble from "./InfoBubble";
import mouse from "../../../../content/images/mouse.png";
import bulb from "../../../../content/images/bulb.png";
import lock from "../../../../content/images/padlock.png";

export default function HowToPlay() {
  return (
    <>
      <div className="howToPlay container" id="howtoplay">
        <HowToPlayTitle caption="can you escape in 60 minutes?" />
        <div className="bubbles">
          <InfoBubble
            caption="BOOK ONE OF OUR ROOMS ONLINE"
            sub="Proin a orci vitae lacus fermentum pulvinar posuere in odio. Ut accumsan sollicitudin est, malesuada malesuada velit sagittis eget."
            src={mouse}
          />
          <InfoBubble
            caption="GET LOCKED IN FOR 60 MINUTES"
            sub="Proin a orci vitae lacus fermentum pulvinar posuere in odio. Ut accumsan sollicitudin est, malesuada malesuada velit sagittis eget."
            src={lock}
          />
          <InfoBubble
            caption="FIND CLUES AND SOLVE PUZZLES"
            sub="Proin a orci vitae lacus fermentum pulvinar posuere in odio. Ut accumsan sollicitudin est, malesuada malesuada velit sagittis eget."
            src={bulb}
          />
        </div>
      </div>
    </>
  );
}
