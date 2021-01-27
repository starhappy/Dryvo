import "./App.css";

import List from "./components/list";


function App(props) {
  return (
    <div className="container">
      <h1>System Management </h1>
      <hr></hr>
      <List store={props.store}/>
    </div>
  );
}

export default App;
