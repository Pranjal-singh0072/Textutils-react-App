import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from  './components/Textform';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

// import About from './components/About';
// import {BrowserRouter, Route, Routes,   } from "react-router-dom";





 //  Demo for practice for full knowledge of Router.....





// import React, { Routes } from "react-router-dom";
// import {Route} from "react-router-dom";
// import About  from './components/About';
// import Contact  from './components/Contact';

// const  App = () => {
  
//   return (
   
  

//   <>

//   <Routes>
//       <Route path="/" Component={About}/>
//       <Route path="/Contact" Component={Contact}/>
//     </Routes>
     
//   </>
//    );
//     };
// export default App;

function App() {
  const [mode, setMode] = useState('light');
  const [alerts, setAlerts] = useState(null);
  const showAlerts = (meassage, type)=>{
    setAlerts ({
      msg: meassage,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
      
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlerts("Dark mode has been enabled", "success");
      document.title='Textutils -Dark mode';
      // setInterval(() => {
      //   document.title='Textutils is amazing mode';
        
      // }, 2000);
      // setInterval(() => {
      //   document.title='textutils is install now';
        
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlerts("Light mode has been enabled", "success");
      document.title='Textutils -Light mode';
      

    }
  }

  return (
    
    <>
{/* <Navbar title="Textutils2" aboutText="About Textutils"/> */}
{/* <BrowserRouter> */}

  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <Alerts Alerts={alerts}/>
  <div className="container" my-2>
    {/* <Routes> */}
      {/* <Route path='/' Component={Textform} /> */}
      {/* <Route path='/about' Component={About} />  */}
    {/* </Routes> */}


  </div>
  {/* </BrowserRouter> */}

   {/* <About/>  */}
  <Textform showAlert={showAlerts}  sheading="Enter the text to analyze below....." mode={mode}/> 
  </>
  );
}
export default App;

