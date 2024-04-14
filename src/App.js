// App.js
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import './App.css'
function GridCell({ content }) {
  return (
    <div className="grid__cell">
      {content}
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [gridContent, setGridContent] = useState(Array(81).fill(""));

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const newGridContent = []
    for (let i = 0; i < 81; i++) {
      newGridContent.push(i < value.length ? value[i] : null);
    }
    setGridContent(newGridContent);
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
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            key={index}
          >
            <GridCell content={content} />
          </Transition>
        ))}
      </div>
    </div>
  );
}

export default App;
