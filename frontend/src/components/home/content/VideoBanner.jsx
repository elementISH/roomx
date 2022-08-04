const src =
  "https://www.youtube.com/embed/mgH10iYreUs?start=11&vq=hd1080&autoplay=1&controls=0&mute=1&loop=1&enablejsapi=1&playlist=mgH10iYreUs&t=10";
export default function Navbar() {
  return (
    <>
      <div className="video-banner__container">
        <div className="video-player__overlay">
          <div className="overlay__text-container">
            <div className="overlay__text">
              <span className="title">ESCAPE</span>
              <span className="subtitle">#1 Rated For Fun And Stories</span>
            </div>
          </div>
        </div>
        <iframe title="iframe" src={src} className="video-player"></iframe>
      </div>
    </>
  );
}
