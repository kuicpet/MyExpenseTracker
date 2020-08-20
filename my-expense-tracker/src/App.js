import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Form from './components/Form';
import List from './components/List';


const ALL_EXPENSES = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('')

  const handleName = (e) => {
    console.log('Name ', e.target.value);
    setName(e.target.value);
  }

  const handleAmount = (e) => {
    console.log('Amount ',e.target.value);
    setAmount(e.target.value);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(name !== '' && amount > 0){
      const expense = { name,amount }
      setExpenses([...expenses,expense])
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses]);

  const handleClearExpenses = () => {
    setExpenses([]);
  }

  return (
    <Container className="text-center">
     <Jumbotron fluid>
       <h3 className="display-6">Expense Tracker</h3>
       <div>
         <p>Total Expense:{' '}
          <span className="text-success">
            ${' '}
            {expenses.reduce((acc, currentValue) => {
              return (acc += parseInt(currentValue.amount))
            }, 0)}
          </span>
         </p>
       </div>
       <Form 
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm}
        handleClearExpenses={handleClearExpenses}
       />
       <List expenses={expenses}/>
     </Jumbotron>
    </Container>
  );
}

export default App;
