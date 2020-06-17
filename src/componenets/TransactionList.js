import React, {useContext} from 'react';
import { Transactions } from './Transactions';

//import Global Context 
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {

    //const context = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    //console.log(context);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions => (<Transactions key={transactions.id} transactions={transactions} />))}                
            </ul>
        </div>
    )
}