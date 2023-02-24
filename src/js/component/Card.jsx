import React from "react";
import "../../styles/cardStyles.css";

const Card = (props) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card m-1 cardComponent">
        <img src={props.CardImage} className="card-img-top" alt="Code" />
        <div className="card-body">
          <h5 className="card-title">{props.CardTitle}</h5>
          <p className="card-text">{props.CardDescription}</p>
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
