import React, { useState, createContext } from 'react';

export const YearContext = createContext();

function YearContextProvider(props) {
  const [year, setYear] = useState('2019');
  const { children } = props;

  const changeYear = (year) => {
    setYear(year);
  };

  return (
    <YearContext.Provider value={{ year, changeYear }}>
      {children}
    </YearContext.Provider>
  );
}

export default YearContextProvider;
