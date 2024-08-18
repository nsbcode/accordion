import React, { useState } from "react";
import { data } from "./Data";
import "./App.css";
import { IoIosArrowDown } from "react-icons/io";
import img1 from "../src/assets/image1.png";
import img2 from "../src/assets/image2.png";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [mutliselected, setMultiSelected] = useState(false);
  const [multiple, setMutiple] = useState([]);

  const handleMultiSelection = (getCurrentId) => {
    const cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMutiple(cpyMutiple)
  };

  console.log(multiple)

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(selected === getCurrentId ? null : getCurrentId);
  };

  return (
    <main className="container">
      <picture>
        <source media="(min-width:650px)" srcSet={img1} />
        <source media="(max-width:425px)" srcSet={img2} />
        <img src={img1} alt="Flowers" />
      </picture>
      <section className="faq-wrapper">
        <h1>FAQ</h1>
        {data.map((item, index) => (
          <div key={item.id}>
            <div
              className="flex-box"
              onClick={
                mutliselected
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <p>{item.title}</p>
              <IoIosArrowDown />
            </div>
            {multiple.indexOf(item.id) !== -1 ? <p className="content">{item.content}</p> : selected === item.id && <p className="content">{item.content}</p>}
          </div>
        ))}
        <button onClick={() => setMultiSelected(!mutliselected)}>
          {mutliselected ? "Single" : "Multiple"}
        </button>
      </section>
    </main>
  );
};

export default App;
