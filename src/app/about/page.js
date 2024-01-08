"use client";

import React, { useState } from 'react';


export default function Result() {

  const [selectedButton, setSelectedButton] = useState(null);
  console.log('Selected : ',selectedButton)

  const handleButtonClick = (id) => {
    setSelectedButton(id === selectedButton ? null : id);
  };

  return (
    <div>
      <h1>Button Selector</h1>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
          <Button
            key={id}
            id={id}
            selected={id === selectedButton}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}


const Button = ({ id, selected, onClick }) => {
  const buttonStyle = {
    backgroundColor: selected ? 'red' : 'white',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={() => onClick(id)}>
      Button {id}
    </button>
  );
};
