import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [data, setData] = useState({
    bill: 0,
    selectTip: 0,
    numberOfPeople: 1,
  });
  const [selectedTip, setSelectedTip] = useState(null);

  const resetButtonState = () => {
    setSelectedTip(null);
  };

  return (
    <AppContext.Provider value={{ data, setData, selectedTip, setSelectedTip, resetButtonState }}>
      {children}
    </AppContext.Provider>
  );
}