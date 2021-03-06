import React, {useState,useContext} from 'react';

//import GlobalContext
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        if (Number(amount) === 0) {
            alert('Please enter correct value');
            return false;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);

        setAmount(0);
        setText('');
    }

    return (
        <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text...">
                </input>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
                </label>
                <input type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount...">
                </input>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
        </>
    )
}