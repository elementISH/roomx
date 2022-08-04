export default function HowToPlayTitle(props) {
  return (
    <>
      <div className="board">
        <div className="plank plank1"></div>
        <div className="plank plank2"></div>
        <div className="plank plank3"></div>
        <div className="caption">{props.caption}</div>
      </div>
    </>
  );
}
