import React from "react";
//import ToggleDisplay from "react-toggle-display";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show
    });
    document.querySelector("#application-input").reset();
  }

  render() {
    return (
      <div>
        <form id="application-input">
          <label>Apply Here: </label>
          <br />
          <textarea id="application-text" rows="8" cols="100" />
          <br />
          <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
        </form>
        {this.state.show ? <div>Your application was submitted!</div> : <div></div>}



      </div>
    );
  }
}
