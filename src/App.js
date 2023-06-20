import "./App.css";
import Form from "./components/Form";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  // const [whichForm, setWhichForm] = useState(null);
  //toggle form
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ارزیابی </h1>
        <Menu onToggleForm={toggleShowForm} />
        {showForm && <Form onClick={toggleShowForm} />}
      </header>
    </div>
  );
}

export default App;
