import React, { useContext } from "react";
import { numberWithCommas } from "../utils/format";

//import Global Context
import { GlobalContext } from "../context/GlobalState";

export const Transactions = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactions.amount < 0 ? "-" : "+";
  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(transactions.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transactions._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
