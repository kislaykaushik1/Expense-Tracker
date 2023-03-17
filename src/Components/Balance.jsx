import React from "react";
import { Box } from "@mui/material";

function Balance({ money }) {
  const amount = money.map((m) => m.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0);
  return (
    <Box>
      <h3>Balance: {total}</h3>
    </Box>
  );
}

export default Balance;
