import React from "react";
import ReactDOM from "react-dom";

export default class Print extends React.Component {
  constructor(props) {
    super(props);
    this.rootId = "react-print";
    this.rootEl = this.createDivElement(this.rootId, props.className);
  }

  render() {
    const { children, trigger } = this.props;
    const content = (
      <>
        {this.createStyle()}
        {children}
      </>
    );

    return (
      <>
        {React.cloneElement(trigger, {
          ...trigger.props,
          onClick: this.handlePrint,
        })}
        {ReactDOM.createPortal(content, this.rootEl)}
      </>
    );
  }

  handlePrint = () => {
    document.body.insertAdjacentElement("afterbegin", this.rootEl);
    window.onafterprint = this.onPrintClose;
    window.print();
  };

  onPrintClose = () => {
    window.onafterprint = () => null;
    this.rootEl.remove();
  };

  createDivElement = (id, className) => {
    const el = document.createElement("div");

    if (id) el.setAttribute("id", id);
    if (className) el.setAttribute("class", className);

    return el;
  };

  createStyle = () =>
    React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `
      #${this.rootId} {
        display: none;
      }

      @media print {
        body > *:not(#${this.rootId}) {
          display: none;
        }

        #${this.rootId} {
          display: flex;
          width: 100%;
          margin-top: 50%;
          justify-content: center;
        }
      }
    `,
      },
    });
}
