import classes from "./Box.module.scss";

function Box({ children }) {
  return <div className={classes.root}>{children}</div>;
}

export default Box;
