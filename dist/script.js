import { FaEdit, FaPlay, FaFont } from "https://cdn.skypack.dev/react-icons/fa";

marked.setOptions({
  breaks: true });


const ClearBtn = ({ clear }) => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "clear-btn", onClick: () => clear() }, "Clear"));



};

const ShowBtn = ({ showPreview }) => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "show-preview-btn", onClick: () => showPreview() }, /*#__PURE__*/
    React.createElement(FaPlay, { className: "icon" })));


};

const ChangeFontBtn = ({ changeFont }) => {
  return /*#__PURE__*/(
    React.createElement("button", { className: "change-font-btn", onClick: () => changeFont() }, /*#__PURE__*/
    React.createElement(FaFont, { className: "icon" })));


};

const Editor = ({ onChange, value, clear, hidePreview, showPreview }) => {
  return /*#__PURE__*/(
    React.createElement("section", { className: hidePreview ? "" : "hide" }, /*#__PURE__*/
    React.createElement("h2", null, "Editor"), /*#__PURE__*/
    React.createElement(ClearBtn, { clear: clear }), /*#__PURE__*/
    React.createElement(ShowBtn, { showPreview: showPreview }), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      onChange: () => onChange(event),
      value: value })));



};

const Preview = ({ input, hidePreview, showPreview, font, changeFont }) => {
  return /*#__PURE__*/(
    React.createElement("section", { className: hidePreview ? "hide" : "" }, /*#__PURE__*/
    React.createElement("h2", null, "Preview"), /*#__PURE__*/
    React.createElement(ChangeFontBtn, { changeFont: changeFont }), /*#__PURE__*/
    React.createElement(ShowBtn, { showPreview: showPreview }), /*#__PURE__*/
    React.createElement("div", {
      id: "preview",
      className: font ? "sans" : "serif",
      dangerouslySetInnerHTML: {
        __html: marked(input) } })));




};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeHolder,
      hidePreview: true,
      sansFont: true };

    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.showPreview = this.showPreview.bind(this);
    this.changeFont = this.changeFont.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value });

  }

  clearInput() {
    this.setState({
      input: "" });

  }

  showPreview() {
    this.setState(state => ({
      hidePreview: !state.hidePreview }));

  }

  changeFont() {
    this.setState(state => ({
      sansFont: !state.sansFont }));

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Editor, {
        onChange: this.handleChange,
        value: this.state.input,
        clear: this.clearInput,
        hidePreview: this.state.hidePreview,
        showPreview: this.showPreview }), /*#__PURE__*/

      React.createElement(Preview, {
        input: this.state.input,
        hidePreview: this.state.hidePreview,
        showPreview: this.showPreview,
        font: this.state.sansFont,
        changeFont: this.changeFont })));



  }}


const placeHolder = `# React Markdown Previewer 
Hello! This is a Markdown previewer. Any text you write in this editor will be converted into HTML using Markdown syntax.

---

Markdown is a HTML preprocessor used to format HMTL more easily. If you want to learn more, go to [this site](https://www.markdownguide.org/) 

* Press the red button to clear everything in the editor.
* Press the A button in the previewer to change the preview font from sans serif to serif and viceversa. 
* If you're on mobile press the green button to change between the editor and the previewer

---

## Some of the things you can do with Markdown:

You can write *italics* or **bold**.
You can write inline \`code\`
If you need to, you can also make a block of code:
\`\`\` 
	const markdownMessage = "Markdown is awesome!"
	console.log(markdownMessage)
\`\`\`

Include blockquotes like this:
> You can even quickly write blockquotes!
> 
> Like this

Finally, you can add any images with the following format:
![add-alt-text-inside-brackets](https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80)

---

This project was made for [Freecodecamp](https://www.freecodecamp.org/) using [Marked by Christopher Jeffrey](https://marked.js.org/). 

Have fun! 😁️`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));