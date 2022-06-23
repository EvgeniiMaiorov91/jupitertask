import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classes from "./Selector.module.scss";
import { changeActiveGroup } from "../../store/agencySlice";

function Select({ group }) {
  const activeGroup = useSelector((state) => state.agency.activeGroup);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const activeOption = group.filter((option) => option.value === activeGroup);
  const ref = useRef();
  const refSelect = useRef();
  useEffect(() => {
    const onClick = (e) =>
      ref.current.contains(e.target) ||
      refSelect.current.contains(e.target) ||
      setShow(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const changeHandler = (value) => {
    dispatch(changeActiveGroup(value));
    setShow(false);
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.select}
        ref={refSelect}
        onClick={() => setShow(!show)}
        tabIndex="0"
      >
        <p>{activeOption[0].value}</p>
        <img src="./img/Triangle.png" />
      </div>
      <ul
        ref={ref}
        style={show ? { opacity: 1, zIndex: 5 } : { opacity: 0, zIndex: -1 }}
      >
        {group.map((item, i) => {
          return (
            <li
              key={i}
              className={classes.itemGroup}
              onClick={() => changeHandler(item.value)}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Select;
