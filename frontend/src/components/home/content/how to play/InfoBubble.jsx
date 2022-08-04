export default function InfoBubble(props) {
  return (
    <>
      <div className="info__bubble">
        <div className="bubble">
          <div className="logo">
            <img src={props.src} alt="" className="logo__img" />
          </div>
        </div>
        <div className="caption">
          <span className="caption__text">{props.caption}</span>
          <span className="caption__subtext">{props.sub}</span>
        </div>
      </div>
    </>
  );
}
