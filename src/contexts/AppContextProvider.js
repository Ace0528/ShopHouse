import React, { createContext, useState } from "react";

const INIT_DATA = {
  currency: "USD",
};

export const AppContext = createContext(INIT_DATA);

export function AppProvider({ children }) {
  const [appData, setAppData] = useState(INIT_DATA);

  const updateCurrency = (currencyValue) => {
    if (!currencyValue) {
      return;
    }
    setAppData({ ...appData, currency: currencyValue });
  };

  return (
    <AppContext.Provider value={{ ...appData, updateCurrency }}>
      {children}
    </AppContext.Provider>
  );
}
