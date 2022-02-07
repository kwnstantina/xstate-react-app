import React from "react";
import "./repository.css";

const Repository = (props) => {
  const { item } = props;

  return (
    <div className="repository__wrapper" key={item.id}>
      <div className="repository">
        <div className="repository__image">
          <img src={item.image} alt="" />
        </div>
        <div className="repository__body">
          <div className="repository__title">{item.title.slice(0, 30)}</div>
          <div className="repository__creator">{item.creator}</div>
          <div className="repository__button">
            <a href="www.youtube.com">Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repository;
