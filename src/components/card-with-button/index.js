import React from "react";
import "./index.css";

const CardWithButton = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary card-with-btn__btn">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardWithButton;
