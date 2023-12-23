import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" style={{ minHeight: "500px" }}>
            <Zmage alt={projects.title} src={projectImage} />
            <div className="item-wrap-inner">
              <div
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  color: "#343434",
                }}
              >
                {projects.title}
              </div>
              <div style={{ textAlign: "left", color: "#555" }}>
                {projects.category}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of Our Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-thirds s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
