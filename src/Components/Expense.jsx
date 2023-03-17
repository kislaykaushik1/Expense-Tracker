import React from "react";
import { Box, Card, CardContent, styled } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  & > div {
    flex: 1;
    padding: 12px;
  }
`;
function Expense({ money }) {
  const amount = money.map((m) => m.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((accumulator, item) => (accumulator += item), 0);
  const expense = amount
    .filter((item) => item < 0)
    .reduce((accumulator, item) => (accumulator += item), 0);
  return (
    <Container>
      <Card>
        <CardContent>
          <h3>Income </h3>
          <h4 style={{ color: "green" }}>{income}</h4>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h3>Expense</h3>
          <h4 style={{ color: "red" }}>{expense}</h4>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Expense;
