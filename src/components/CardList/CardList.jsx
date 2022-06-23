import classes from "./CardList.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

function CardList() {
  const [filterCards, setFilerCards] = useState([]);
  const cards = useSelector((state) => state.agency.cards);
  const activeGroup = useSelector((state) => state.agency.activeGroup);
  useEffect(() => {
    if (activeGroup !== "Show All") {
      let arr = cards.filter((card) => card.group === activeGroup);
      setFilerCards(arr);
    } else {
      let arr = cards;
      setFilerCards(arr);
    }
  }, [activeGroup, cards]);
  return (
    <div className={classes.root}>
      {filterCards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}

export default CardList;
