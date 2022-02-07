import React from "react";
import { animated } from "react-spring";
import "../deck/deck.css";
import "../resositories/repository.css";

const AnimateCard = ({ data, id, style, onClick }) => {
  return (
    <animated.div
      style={{
        ...style,
      }}
    >
      <div className="repository" key={id}>
        <div className="repository__image">
          <img src={data.image} alt="" />
          <button className="repository__next" onClick={onClick}>
            {"Next"}
          </button>
        </div>
        <div className="repository__body">
          <div className="repository__title">{data.title}</div>
          <div className="repository__creator">{data.creator}</div>
          <div className="repository__button">
            <a href="/">Repository</a>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimateCard;
