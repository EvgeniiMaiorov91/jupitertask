import Container from "../Container/Container";
import Header from "../Header/Header";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.root}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
