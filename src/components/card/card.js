import React from "react";
import "./card.css";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";

const Card = (props) => {
  const { text } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { text },
    isDragging(monitor) {
      const item = monitor.getItem();
      return text === item.text;
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="main-container" ref={drag}>
      <div className="card">
        <div className="card__icon" />
        <h1 className="card__title"> {text}</h1>
      </div>
    </div>
  );
};

export default Card;
