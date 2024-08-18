import React, { useState } from "react";
import { data } from "./Data";
import "./App.css";
import { IoIosArrowDown } from "react-icons/io";
import img1 from "../src/assets/image1.png";
import img2 from "../src/assets/image2.png";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [mutliselected, setMultiSelected] = useState(false);

  console.log(mutliselected);

  return (
    <main className="container">
      <picture>
        <source media="(min-width:650px)" srcset={img1} />
        <source media="(max-width:425px)" srcset={img2} />
        <img src={img1} alt="Flowers" />
      </picture>
      <section className="faq-wrapper">
        <h1>FAQ</h1>
        {data.map((item, index) => (
          <div>
            <div
              className="flex-box"
              onClick={() => setSelected(selected === item.id ? null : item.id)}
            >
              <p>{item.title}</p>
              <IoIosArrowDown />
            </div>
            {mutliselected ? (
              <p className="content">{item.content}</p>
            ) : (
              selected === item.id && <p className="content">{item.content}</p>
            )}
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
