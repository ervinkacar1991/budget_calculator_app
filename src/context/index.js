import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const initialExpenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

  const [charge, setCharge] = useState("");
  const [expenses, setExpenses] = useState(initialExpenses);
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState({ show: false });

  const value = {
    charge,
    setCharge,
    expenses,
    setExpenses,
    amount,
    setAmount,
    edit,
    setEdit,
    alert,
    setAlert,
    id,
    setId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
