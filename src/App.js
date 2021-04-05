import { useState } from "react";
import AddButton from "./components/AddButton";
import AddNote from "./components/AddNote";
import Container from "./components/Container";
import "./css/App.css";
import { useSelector } from "react-redux";
import { saveState } from "./redux/reducers/localStorage";

function App() {
  const state = useSelector((state) => state);
  saveState(state);

  const [isAdd, setAdd] = useState(false);
  const toggleAdd = () => {
    setAdd(!isAdd);
  };

  return (
    <div className="App">
      <Container isAdd={isAdd} />
      <AddButton isAdd={isAdd} toggleAdd={toggleAdd} />
      {isAdd ? <AddNote toggleAdd={toggleAdd} /> : ""}
    </div>
  );
}

export default App;
