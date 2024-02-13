"use client";

// import React, { useState } from "react";

// export default function Result() {
//   const [selectedButton, setSelectedButton] = useState(null);
//   console.log("selected : - ", selectedButton);

//   const handleButtonClick = (id) =>
//     setSelectedButton((prev) => (prev === id ? null : id));

//   return (
//     <div>
//       <h1>Button Selector</h1>
//       <div>
//         {[...Array(10).keys()].map((id) => (
//           <button
//             key={id + 1}
//             style={{
//               backgroundColor: id + 1 === selectedButton ? "red" : "white",
//               padding: "10px",
//               margin: "5px",
//               cursor: "pointer",
//             }}
//             onClick={() => handleButtonClick(id + 1)}
//           >
//             Button {id + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

const data = [
  {
    type: "electricity",
    service: [
      { name: "DPDC prepaid" },
      { name: "DPDC postaid" },
      { name: "Desco prepaid" },
    ],
  },
  {
    type: "gas",
    service: [{ name: "Bakhrabad metered" }, { name: "Jalalabad nonmetered" }],
  },
  { type: "water", service: [{ name: "Dhaka Wasa" }, { name: "Khulna Wasa" }] },
  { type: "service", service: [{ name: "E-mutation" }] },
];

export default function Test() {
  const [selectedService, setSelectedService] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleClick = (type) => {
    setSelectedService(type);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    let updatedFilteredData = data;

    if (selectedService) {
      updatedFilteredData = updatedFilteredData.filter(
        (item) => item.type === selectedService
      );
    }

    if (searchValue) {
      updatedFilteredData = updatedFilteredData
        .map((item) => ({
          ...item,
          service: item.service.filter((serviceItem) =>
            serviceItem.name.toLowerCase().includes(searchValue.toLowerCase())
          ),
        }))
        .filter((item) => item.service.length > 0);
    }

    setFilteredData(updatedFilteredData);
  }, [selectedService, searchValue]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setFilteredData(data);
    setSelectedService(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <input
        value={searchValue}
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {!isFocused && (
        <div style={{ display: "flex", gap: "4px" }}>
          {data.map((value) => (
            <button key={value.type} onClick={() => handleClick(value.type)}>
              {value.type}
            </button>
          ))}
        </div>
      )}
      <div>
        {filteredData.map((details) =>
          details.service.map((serviceName) => (
            <p key={serviceName.name}>{serviceName.name}</p>
          ))
        )}
      </div>
    </div>
  );
}
