import React from "react";
import "./Menu.css";

const Menu = ({ onToggleForm }) => {
  return (
    <div className="Menu">
      <div className="menu mt-4">
        <button className="App-link btn" onClick={onToggleForm}>
          <h3>نام فرزند</h3>
        </button>
        <button className="App-link btn" onClick={onToggleForm}>
          <h3>نام خویشتن</h3>
        </button>
        <button className="App-link btn" onClick={onToggleForm}>
          <h3> ازدواج</h3>
        </button>
        <button className="App-link btn" onClick={onToggleForm}>
          <h3> دوست</h3>
        </button>
        <button className="App-link btn" onClick={onToggleForm}>
          <h3> دوستان</h3>
        </button>
      </div>
    </div>
  );
};

export default Menu;
