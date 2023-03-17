import { ListItem, ListItemText, styled } from "@mui/material";
import React from "react";
const Items = styled(ListItem)`
  margin-top: 20px;
  display: flex;
  border: 1px solid black;
`;

function Transactions({ money }) {
  const back = money.amount >= 0 ? "Green" : "Red";
  //console.log(money);
  return (
    <Items style={{ background: `${back}`, color: "#fff" }}>
      <ListItemText>{money.text}</ListItemText>
      <ListItemText>{money.amount}</ListItemText>
    </Items>
  );
}

export default Transactions;
