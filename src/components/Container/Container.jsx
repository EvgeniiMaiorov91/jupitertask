import Box from "../Box/Box";
import CardList from "../CardList/CardList";
import Selector from "../Selector/Selector";
import classes from "./Container.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeActiveGroup,
  changeWindowWidth,
  load,
} from "../../store/agencySlice";
import cards from "../../store/cards";

function Container() {
  const [count, setCount] = useState(1);

  const loadMore = () => {
    let loadArr = [];
    for (let i = 0; i < cards.length; i++) {
      let card = { ...cards[i] };
      card.title = card.title + count;
      card.id = card.id + 9 * count;
      loadArr.push(card);
    }
    setCount(count + 1);
    dispatch(load(loadArr));
  };

  useEffect(() => {
    function handleResize() {
      dispatch(changeWindowWidth(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dispatch = useDispatch();
  const activeGroup = useSelector((state) => state.agency.activeGroup);
  const windowWidth = useSelector((state) => state.agency.windowWidth);
  const group = [
    { value: "Show All" },
    { value: "Design" },
    { value: "Branding" },
    { value: "Illustration" },
    { value: "Motion" },
  ];
  return (
    <div className={classes.root}>
      <Box>
        {windowWidth > 1040 ? (
          <ul className={classes.groupNav}>
            {group.map((selected, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    selected.value === activeGroup ? classes.active : ""
                  }`}
                  onClick={() => {
                    dispatch(changeActiveGroup(selected.value));
                  }}
                >
                  {selected.value}
                </li>
              );
            })}
          </ul>
        ) : (
          <Selector group={group} />
        )}

        <CardList />
        <div className={classes.button} onClick={loadMore}>
          <p>LOAD MORE</p>
        </div>
      </Box>
    </div>
  );
}

export default Container;
