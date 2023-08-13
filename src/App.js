
import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Cards from './components/Cards/Cardone';
import Footer from './components/Footer/Footer';

function App() {

  //useState hooks has two parameter
  //1:default state
  //2:setState => to mutate or change the default state, can update the change multiple times during rendering of the components
  const[name, setName]=useState("");
  return (
    <div className="App">
      
      <h1>Hello:{name} </h1>
      <button onClick={()=>setName("JG")}>Username Change</button>
      <Navbar/>
      <Cards />
      <Footer/>
      
    </div>
  );
}

export default App;
