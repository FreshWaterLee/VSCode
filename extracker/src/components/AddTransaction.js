import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <>
        <h3>Add new transaction</h3>
        <form id = 'form'>
            <div className="form-control">
                <label for="text">Text</label>
                <input value = {text} onChange = {(e)=>setText(e.target.value)}type="text"  id="text" placeholder = "Enter text..." />
            </div>
            <div className="form-control">
                <label for="amount">
                    Amount<br />
                    (negative - expense, position -income)</label>
                <input type="number" value = {amount} onChange={(e)=> setAmount(e.target.value)} placeholder = "Enter Amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}
