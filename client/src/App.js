import React from 'react';

//import components
import { Header } from './componenets/Header';
import { Balance } from './componenets/Balance';
import { IncomeExpenses } from './componenets/IncomeExpenses';
import { TransactionList } from './componenets/TransactionList';
import { AddTransaction } from './componenets/AddTransaction';

//import Global Provider
import { GlobalProvider } from './context/GlobalState';

//import CSS
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        
      </div>
    </GlobalProvider>
  );
}

export default App;
