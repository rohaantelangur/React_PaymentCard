import './App.css';
import { Card } from './components/Card';

function App() {
  let obj1={
    date:"28/10/2020",
    h1:"Amazon Gift",
    h2:"Pay",
    h3:"Desktop - Mobile",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTFwHgc0uylnzUZSQpWKHETTuIjwfIdAA9g&usqp=CAU",
    
  }
  let bgcolor1={
    backgroundColor: "#FFA500"
  }
  let bgcolor2={
    backgroundColor: "#f5f5f5"
  }
  let obj2={
    date:"17-Sep-2020",
    h1:"Apple Gift",
    h2:"Payment",
    h3:"MacOS - Mobile",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png?20200509031052",
  }

  return (
    <div className="App">
      <Card obj1={obj1} bgcolor1={bgcolor1}/>

      <Card obj1={obj2} bgcolor1={bgcolor2}/>
    </div>
  );
}

export default App;
