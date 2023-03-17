import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./transaction.css";
function Transaction({ setMoney }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleClick = () => {
    const trans = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
    };
    setMoney((prevState) => [trans, ...prevState]);
  };
  return (
    <div className="trans">
      <h4>Transaction</h4>
      <TextField
        value={text}
        label="enter expense"
        fullWidth
        onChange={(e) => setText(e.target.value)}
      />
      &nbsp;
      <TextField
        value={amount}
        label="enter amount"
        fullWidth
        onChange={(e) => setAmount(e.target.value)}
      />
      &nbsp;
      <div>
        <Button variant="outlined" size="medium" onClick={() => handleClick()}>
          Add Transaction
        </Button>
      </div>
    </div>
  );
}

export default Transaction;
