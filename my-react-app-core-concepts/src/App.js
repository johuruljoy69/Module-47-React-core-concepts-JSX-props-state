import logo from './logo.svg';
import './App.css';

// Array of object
const singers = [
  {name: 'Kona', job:'amr sona moni'},
  {name: 'Tahsan', job:'amr sona moni'},
  {name: 'Tasrif khaan', job:'amr sona moni'},
  {name: 'Agun khan', job:'amr sona moni'}
]

function App() {
  const persons = ['jahin', 'johir', 'arabi', 'tharat', 'Shimu', 'Talha', 'Soha', 'Tanisa']
  return (
    <div className="App">
      {
        persons.map(person => <li>name: {person}</li> )
      }
      {/* {
        persons.map(person => <Person name={person}></Person> )
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={persons[0]} job="Army"></Person>
      <Person name={persons[1]} job="Freelancer"></Person>
      <Person name={persons[2]} job="Police"></Person> */}
      {/* <Person name={persons[3]} job="Police"></Person> */}

       
      <h5>New component</h5>
      <p>React mama</p>
      <Friend name='Atikur Rahman' phone='01736124867'></Friend>
      <Friend name='Rabbi Hasan' phone='01753215648'></Friend>
      
    </div>
  );
}
function Person(props){
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.job} </p>
  </div>
  )
}

function Friend(props){
  console.log(props);
  return(
    <div className='friend'>
      <h3>Name: {props.name} </h3>
      <p>Phone: {props.phone} </p>
    </div>
  )
}

export default App;
