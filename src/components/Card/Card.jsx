import { useDispatch } from "react-redux";
import classes from "./Card.module.scss";
import {
  changeActiveGroup,
  changeActiveCard,
  removeCard,
} from "../../store/agencySlice";
import { useSelector } from "react-redux";

function Card({ card }) {
  const changeActive = () => {
    if (activeCard === card.id) {
      dispatch(changeActiveCard(""));
    } else {
      dispatch(changeActiveCard(card.id));
    }
  };
  const dispatch = useDispatch();
  const activeCard = useSelector((state) => state.agency.activeCard);
  const windowWidth = useSelector((state) => state.agency.windowWidth);
  return (
    <div
      className={classes.root}
      onClick={changeActive}
    >
      {windowWidth > 1040 && (
        <div
          className={classes.border}
          style={{
            backgroundColor: activeCard === card.id ? "#4FE24A" : "transparent",
          }}
        />
      )}
      <img src={card.img} className={classes.img} />
      <div className={classes.cardInfo}>
        <div
          className={classes.cardGroup}
          onClick={() => {
            dispatch(changeActiveGroup(card.group));
          }}
        >
          {card.group}
        </div>
        <p>{card.title}</p>
      </div>
      {activeCard === card.id && windowWidth > 1040 && (
        <img
          src="./img/delete_forever_FILL0_wght400_GRAD0_opsz40.svg"
          className={classes.delete}
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeCard(card.id));
          }}
        />
      )}
    </div>
  );
}

export default Card;
