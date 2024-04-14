// App.js
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import './App.css'

const TransitionEffects = {
  None: "",
  Fade: "transition-opacity",
  Slide: "transition-transform",
};
function GridCell({ content, transitionEffect}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, [content]);
  
    const transitionClassName = TransitionEffects[transitionEffect];

  return (
    <div className={`grid__cell ${transitionClassName}`}>
      {content}
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [gridContent, setGridContent] = useState(Array(81).fill(""));
  const [selectedTransitionEffect, setSelectedTransitionEffect] = useState("None");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const newGridContent = []
    for (let i = 0; i < 81; i++) {
      newGridContent.push(i < value.length ? value[i] : null);
    }
    setGridContent(newGridContent);
  };

   const handleTransitionEffectChange = (e) => {
    setSelectedTransitionEffect(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        className=""
        placeholder="Type here..."
        value={inputValue}
        onChange={handleChange}
      />
      <div className="grid">
        {gridContent.map((content, index) => (
          <Transition
            show={true}
          
            key={index}
          >
            <GridCell content={content} transitionEffect={selectedTransitionEffect}/>
          </Transition>
        ))}
      </div>

        <div>
        <label htmlFor="transitionEffect">Choose Transition Effect:</label>
        <select
          id="transitionEffect"
          className="dropdown"
          value={selectedTransitionEffect}
          onChange={handleTransitionEffectChange}
        >
          {Object.keys(TransitionEffects).map((effect) => (
            <option key={effect} value={effect}>
              {effect}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
