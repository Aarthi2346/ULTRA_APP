//import ucfImage from './UCFlogo.webp';
import React from 'react';
import { HashRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Videos from './components/Videos';


function App() {
  return (
    <Container>
    <HashRouter basename='' >
    <div className="App">
    
      <header className="App-header">
      
      {/* <div className="top-left-container">
        <img src={ucfImage} className="App-logo" alt="UCF" />
        </div>        */}
        <Link to="/" className="App-link"><h2> ← Return to Main page</h2></Link>
        </header>
      
      <NavigationBar />
      
      <Routes>
        {/* <Route exact path="/main" element={<Main />} /> */}
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      </div>
      
    </HashRouter>
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









