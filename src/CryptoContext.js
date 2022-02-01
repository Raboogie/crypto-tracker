import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("EUR");
  const [symbol, setSymbol] = useState("$");

  // Runs everytime currency changes, so add to list of dependecies
  useEffect(() => {
    if (currency === "USD") {
      setSymbol("$");
    } else if (currency === "EUR") {
      setSymbol("€");
    }
  }, [currency]);

  // pass the props to crypto provider so the whole app can have access to these props.
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
