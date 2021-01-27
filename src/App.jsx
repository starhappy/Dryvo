import "./App.css";
import Add from "./components/add";
import List from "./components/list";

function App(props) {
  return (
    <div className="container">
      <h1>System Management </h1>
      <hr></hr>
      <Add store={props.store} />
      <List store={props.store} />
    </div>
  );
}

export default App;
