//import ucfImage from './UCFlogo.webp';
import React from 'react';
import { HashRouter,BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import  Main from './components/Main';


function App() {
  return (
    <Container>
    <BrowserRouter>
    <div className="App">
    
      <header className="App-header">
      
      {/* <div className="top-left-container">
        <img src={ucfImage} className="App-logo" alt="UCF" />
        </div>        */}
        <Link to="/ULTRA_APP" className="App-link"><h2> ← Return to Main page</h2></Link>
        </header>
      
      <NavigationBar />
      
      <Routes>
        {/* <Route exact path="/main" element={<Main />} /> */}
        <Route path="/" element={<Main />} /> 

        <Route path="/ULTRA_APP" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      </div>
      
    </BrowserRouter>
    </Container>

          
      
  );
}

export default App;

const Container = styled.div`
      width: 100vw;
      height: 100vh;
      background-size: cover;
      background-repear: no-repeat;
      background-position: center;
      background-image: url('/images/ultra.jpg');

`









