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
            sub="start by selecting one of our unique and challenging rooms. We recommend arriving 10-15 minutes early to ensure you have enough time to sign in and receive instructions!"
            src={mouse}
          />
          <InfoBubble
            caption="GET LOCKED IN FOR 60 MINUTES"
            sub="our immersive rooms are designed to transport you to a different world, and it's up to you and your team to work together to solve puzzles and clues within the time limit."
            src={lock}
          />
          <InfoBubble
            caption="FIND CLUES AND SOLVE PUZZLES"
            sub="hints are available if you get stuck, we ensure   that everyone can enjoy the experience, regardless of skill level. Book your Roomx escape room today for an adventure you won't forget."
            src={bulb}
          />
        </div>
      </div>
    </>
  );
}
