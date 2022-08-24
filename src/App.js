import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [newList, setNewList] = useState([]);
  const [sortedList, setSortedList] = useState([4, 13, 8, 9, 7, 1, 6]);
  const [addNumber, setAddNumber] = useState("");

  sortedList.sort((a, b) => {
    return a - b;
  });

  useEffect(() => {
    sortedList.sort((a, b) => {
      return a - b;
    });

    const newData = [];
    sortedList.map((item) => newData.reverse().push(item));
    newData.reverse();
    setNewList(newData);
  }, [sortedList]);

  const onChangeInput = (e) => {
    setAddNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (addNumber === "") {
      return false;
    }

    setSortedList([...sortedList, addNumber]);
    setAddNumber("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="balloon">
          <p>Örnek Sonuç</p>
          <p>[13, 8, 6, 1, 4, 7, 9]</p>
        </div>
        <p>
          [
          {newList.map((item, index) => (
            <span key={index}>
              {index === 0 ? "" : <span> - </span>}
              {item}{" "}
            </span>
          ))}
          ]
        </p>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="nameFormControlInput" className="form-label">
              Add Number:
            </label>
            <input
              id="nameFormControlInput"
              type="number"
              name="addNumber"
              placeholder="Add Number"
              className="form-control"
              value={addNumber}
              onChange={onChangeInput}
            />
          </div>
          <button className="btn btn-primary">ADD</button>
        </form>
      </header>
    </div>
  );
}

export default App;
