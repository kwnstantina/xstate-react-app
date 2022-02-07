import React from "react";
import "./input.css";
import { useDrop } from "react-dnd";

export const Input = (props) => {
  const { onDrop, cards, value, onChange } = props;

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item) => onDrop(item),
  });

  return (
    <div ref={drop}>
      <div className="search">
        {isOver && (
          <div className="arrow">
            <i className="fa fa-arrow-right"></i>
          </div>
        )}
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for repos..."
          value={value}
          onChange={onChange}
        />
        <button className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};
