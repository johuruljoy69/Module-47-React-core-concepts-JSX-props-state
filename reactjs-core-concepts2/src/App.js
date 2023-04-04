import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {



  // const products = [
  //   {name: 'laptop', price: 750000},
  //   {name: 'Mobile', price: 300000},
  //   {name: 'Watch', price: 50000},
  //   {name: 'Computer', price: 850000}
  // ]
  return (
    <div className="App">
      <ExternalUser></ExternalUser>

      {/* <Counter></Counter>       */}
      {/* {
        products.map(product => <Product name={product.name}price={product.price} ></Product>)
      } */}
     {/* <Product name='laptop'price='500000'></Product>
     <Product name='Phone' price='200000'></Product> */}
    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([])
  // useEffect( ()=>{}, [])
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h2>External users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border: '2px solid red', margin:'20px'}} >
      <h3>Name: {props.name}</h3>
      <h6>Email: {props.email}</h6>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(55)

//   const IncreaseCount = () =>setCount(count +1);  
//   const decreaseCount = () =>setCount(count -1);  

  // const IncreaseCount = () =>{
  //   const newCount = count +1;
  //   setCount(newCount)
  // }

// return (
//   <div>
//     <h1>Count: {count} </h1>
//     <button onClick={IncreaseCount}>Increase</button>
//     <button onClick={decreaseCount}>Decrease</button>
//   </div>
// )


function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}

export default App;
