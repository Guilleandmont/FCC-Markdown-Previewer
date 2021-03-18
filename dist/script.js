import { FaEdit, FaPlay, FaFont } from "https://cdn.skypack.dev/react-icons/fa";

/* render() {
    return (
      <div dangerouslySetInnerHTML={{
          __html: marked("## Hello from React")}} />
    )
  }
}*/

const ClearBtn = props => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "clear-btn", onClick: "clear" }, "Clear"));



};

const ShowBtn = props => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "show-preview-btn", onClick: "show" }, /*#__PURE__*/
    React.createElement(FaPlay, { className: "icon" })));


};

const ChangeFontBtn = props => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "change-font-btn", onClick: "change" }, /*#__PURE__*/
    React.createElement(FaFont, { className: "icon" })));


};

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("section", null, /*#__PURE__*/
      React.createElement("h2", null, "Editor"), /*#__PURE__*/
      React.createElement(ClearBtn, null), /*#__PURE__*/
      React.createElement(ShowBtn, null), /*#__PURE__*/
      React.createElement("textarea", { id: "editor" })));


  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("section", { className: "hide" }, /*#__PURE__*/
      React.createElement("h2", null, "Preview"), /*#__PURE__*/
      React.createElement(ChangeFontBtn, null), /*#__PURE__*/
      React.createElement(ShowBtn, null), /*#__PURE__*/
      React.createElement("div", { id: "preview", className: "sans" }, "This is text")));




  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "" };

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Editor, null), /*#__PURE__*/
      React.createElement(Preview, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));