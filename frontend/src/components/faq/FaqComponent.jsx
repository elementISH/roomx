import { useState } from "react";

const FaqComponent = (props) => {
  const [clicked, setClicked] = useState(false);

  function handleToggle() {
    setClicked(!clicked);
  }
  return (
    <>
      <div className="accordion">
        <div
          className={`accordion__collapsible ${clicked && "collapsible--open"}`}
        >
          <div
            className="collapsible__header add-pointer"
            onClick={() => {
              handleToggle();
            }}
          >
            <p className="collapsible__header--question">{props.question}</p>
          </div>
          <div className="collapsible__content">
            <p className="collapsible__content--answer">{props.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
