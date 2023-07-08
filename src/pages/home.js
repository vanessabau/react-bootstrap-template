import React from "react";

const HomePage = () => {
  return (
    <div class="container">
      <h1>Home Page</h1>
      <div className="row">
        <div className="col-sm-12 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              Welcome to my website. This is a template project to get the feel
              of using Bootstrap with React and Next.js for routing.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Learn More</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/about" className="card-link">
                About
              </a>
              <a href="https://getbootstrap.com/" className="card-link">
                Link to Bootstrap
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Submit Feedback</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/contact" className="card-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
