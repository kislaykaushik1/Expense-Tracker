import { Box, Typography, Divider, List } from "@mui/material";
import React from "react";
import Transactions from "./Transactions";

function History({ money }) {
  return (
    <Box>
      <Typography varient="h5">History</Typography>
      <Divider style={{ width: "100%" }} />
      <List>
        {money.map((m) => (
          <>
            <Transactions money={m} key={m.id} />
          </>
        ))}
      </List>
    </Box>
  );
}

export default History;
