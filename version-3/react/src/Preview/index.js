import React from "react";
//import ToggleDisplay from "react-toggle-display";

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showPreview(event) {
    event.preventDefault();
    const applicationText = document.querySelector(
      "#application-text"
    ).value;
    this.setState({
      show: !this.state.show,
      applicationText : applicationText
    });
  }

  render() {
    return (
      <div>
        <button id="preview-toggle" onClick={this.showPreview.bind(this)}>
          Show Preview
        </button>
          {this.state.applicationText}
      </div>
    );
  }
}
