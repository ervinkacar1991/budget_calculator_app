import React from "react";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
