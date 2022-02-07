import React, { useState, useCallback } from "react";
import { useTransition, interpolate } from "react-spring";
import AnimateCard from "../card/animateCard";
import "./deck.css";

const Deck = (props) => {
  const { repository } = props;
  const [idx, setIndex] = useState(0);

  const onClick = useCallback(() => {
    setIndex((i) => (i + 1) % repository.length);
  }, [setIndex, repository]);

  const transitions = useTransition(idx, null, {
    initial: null,
    from: { translate: -10, y: -30 },
    enter: { translate: 0, y: 0 },
    leave: { translate: 0, y: 0 },
    unique: true,
    exitBeforeEnter: true,
  });

  return (
    <div className="deck">
      {transitions.map(({ item, key: key1, props }) => (
        <AnimateCard
          key={key1}
          data={repository[item]}
          onClick={onClick}
          style={{
            transform: interpolate(
              [props.translate, props.y],
              (t, y) => `translate3d(${t}rem,${y}rem,0 )`
            ),
          }}
        />
      ))}
    </div>
  );
};

export default Deck;
