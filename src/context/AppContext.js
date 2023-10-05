import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [data, setData] = useState({
    bill: 0,
    selectTip: 0,
    numberOfPeople: 0,
  });

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}