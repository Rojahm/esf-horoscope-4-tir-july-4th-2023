import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  //toggle form
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ارزیابی </h1>
        <div className="menu mt-4">
          <h3>
            <a
              className="App-link"
              target="_self"
              rel="noopener noreferrer"
              onClick={toggleShowForm}
            >
              نام فرزند
            </a>
          </h3>
          <h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              نام خویشتن
            </a>
          </h3>
          <h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              ازدواج
            </a>
          </h3>
          <h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              دوست
            </a>
          </h3>
          <h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              دوستان
            </a>
          </h3>
        </div>
        {showForm && <Form onClick={toggleShowForm} />}
      </header>
    </div>
  );
}

export default App;
