import classes from "./Navigation.module.scss";

function Navigation() {
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.img}>
          <img src="./img/Polygon-1.png" className={classes.littleImg} />
          <img src="./img/Polygon.png" />
          <p>Agency</p>
        </div>
      </div>
      <div className={classes.navigator}>
        <p>About</p>
        <p>Services</p>
        <p>Pricing</p>
        <p>Blog</p>
      </div>
      <div className={classes.button}>
        <p>CONTACT</p>
      </div>
    </div>
  );
}

export default Navigation;
