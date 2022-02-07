import React, { useState, useCallback } from "react";
import "./subjects.css";
import { Input } from "../../components/search/input";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "../../components/card/card";
import { labels } from "../../ItemTypes";
import slash from "../../images/slash.jpg";
import SkeletonCard from "../../components/skeleton/skeletonCard";
import logo from "../../images/react.png";
import Deck from "../../components/deck/deck";
import Result from "../../components/resultView/result";

const Subjects = () => {
  const [value, setValue] = useState("");
  const [cards, setCards] = useState([]);
  const [loading, setLoader] = useState(true);
  const [open, set] = useState(false);

  let repository = [
    {
      image: logo,
      title: "React",
      creator: "Konna",
      id: 1,
      uuid: "34234234-4534534",
    },
    {
      image: logo,
      title: "Xstate",
      creator: "dimi",
      id: 2,
      uuid: "34234235644-453443534534",
    },
    {
      image: logo,
      title: "Xstate",
      creator: "e",
      id: 3,
      uuid: "435345345-453443988089534534",
    },
    {
      image: logo,
      title: "Xstate",
      creator: "o",
      id: 4,
      uuid: "456456455645645-4534534",
    },
  ];

  const handleDrop = useCallback(
    (item) => {
      const { text } = item;
      setCards([text]);
      setValue(text);
    },
    [cards]
  );
  const onChange = (e) => setValue(e.target.value);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="wrapper">
        <div className="container">
          <h1 className="text">Repositories</h1>
        </div>
        <div className="box">
          <Input
            placeholder="Start typing to search ..."
            onDrop={(item) => handleDrop(item)}
            //   isLoading={currentState.matches("searching")}
            //   onChange={(query) => search({ query })}
            className="searchInput"
            cards={cards}
            onChange={onChange}
            value={value}
          />
        </div>
        <div className="boxes">
          {labels.map((item) => (
            <Card text={item.text} key={item.id} />
          ))}
        </div>
        <div className="boxes__wrapper">
          {loading ? <Deck repository={repository} /> : <SkeletonCard />}
          <div
            className="result__wrapper"
            onClick={() => set((state) => !state)}
          >
            <h1 className="result__text">
              Data for Nerds <i className="fa fa-server" aria-hidden="true"></i>
            </h1>
            <Result open={open}>
              <span className="result__text">{`Results:${repository.length}`}</span>
              <span className="result__text">{"Time:200ms"}</span>
              <span className="result__text">{"Connection Speed:200ms"}</span>
            </Result>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Subjects;
