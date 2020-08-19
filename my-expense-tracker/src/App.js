import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Form from './components/Form';
import List from './components/List';


const ALL_EXPENSES = [
  { id: 1, name: 'Buy a Car', amount: 2000},
  { id: 2, name: 'Buy a milk', amount: 5},
  { id: 3, name: 'Book flight tickets', amount: 300},
  { id: 4, name: 'Buy a Book', amount: 20}
]

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
       />
       <List expenses={expenses}/>
     </Jumbotron>
    </Container>
  );
}

export default App;
