import React, { useContext, useState, useEffect } from "react";
import Papa from "papaparse";
import { ContextApi } from "@/app/layout";

export const CSV = () => {
  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  // State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  // State to store the values
  const [values, setValues] = useState([]);

  const { companyData, setCompanyData } = useContext(ContextApi);

  useEffect(() => {
    // Perform calculations and updates after parsedData is updated
    if (parsedData.length > 0) {
      let maxX = -Infinity;
      let maxY = -Infinity;
      let maxZ = -Infinity;
      let minX = Infinity;
      let minY = Infinity;
      let minZ = Infinity;

      parsedData.forEach((item) => {
        const x = parseFloat(item.X);
        const y = parseFloat(item.Y);
        const z = parseFloat(item.Z);

        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        maxZ = Math.max(maxZ, z);

        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        minZ = Math.min(minZ, z);
      });

      // Update the companyData after calculations
      setCompanyData((prev) => ({
        ...prev,
        max_X: maxX,
        max_Y: maxY,
        max_Z: maxZ,
        min_X: minX,
        min_Y: minY,
        min_Z: minZ,
      }));
    }
  }, [parsedData, setCompanyData]);

  console.log('DATA',companyData)

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.forEach((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  return (
    <input type="file" name="file" onChange={changeHandler} accept=".csv" />
  );
};
