import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Details from "./Job-Details";
import Form from "./Form";
import Preview from "./Preview";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({ data: response });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Details job={this.state.data} />
          <Form />
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
