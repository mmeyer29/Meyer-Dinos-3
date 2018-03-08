import React from "react";

export default class Details extends React.Component {
  render() {
    return (
      <section id="job-details">
        <h2>Job Details</h2>
        <h4>{this.props.job.title}</h4>
        <p>{this.props.job.description}</p>
      </section>
    );
  }
}
