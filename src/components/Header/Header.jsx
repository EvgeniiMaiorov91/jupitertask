import Box from "../Box/Box";
import Navigation from "../Navigation/Navigation";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.root}>
      <Box>
        <Navigation />
        <p className={classes.title}>Portfolio</p>
        <p className={classes.description}>
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </Box>
    </div>
  );
}

export default Header;
