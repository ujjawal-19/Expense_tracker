
import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    let DUMMY_EXPENSE = [
        {
            id: 'e1',
            title : 'School fee',
            amount : 250,
            date : new Date(2021 , 5, 12)
        },
        {
            id: 'e2',
            title : 'Books',
            amount : 230,
            date : new Date(2021 , 2, 22)
        },
        {
            id: 'e3',
            title : 'House Rent',
            amount : 250,
            date : new Date(2021 , 6, 10)
        },
        {
            id: 'e4',
            title : 'Food',
            amount : 540,
            date : new Date(2021 , 5, 5)
        }
    ];
    
    {/* for updating out data list */}
    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
};

export default App;
