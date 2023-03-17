import "./App.css";
import Balance from "./Components/Balance";
import Expense from "./Components/Expense";
import Transaction from "./Components/Transaction";
import History from "./Components/History";
import { Typography, styled, Box } from "@mui/material";
import { useState } from "react";
const Header = styled(Typography)`
  margin: 10px 0;
  font-size: 30px;
  color: LightGreen;
`;
const Component = styled(Box)`
  display: flex;

  width: 800px;
  padding: 10px;
  margin: auto;

  & > div {
    height: 80vh;
    width: 50%;
    padding: 10px;
  }
`;
function App() {
  const [money, setMoney] = useState([
    { id: 1, text: "Salary", amount: 10000 },
    { id: 1, text: "Salary", amount: 10000 },
  ]);

  return (
    <div className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance money={money} />
          <Expense money={money} />
          <Transaction setMoney={setMoney} />
        </Box>
        <Box>
          <History money={money} />
        </Box>
      </Component>
    </div>
  );
}

export default App;
