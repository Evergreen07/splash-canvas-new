import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/layouts/Navbar';
import Footer from './Components/layouts/Footer';
import Cards from './Components/display/cards/Cards';
import Upload from './Components/display/upload/Upload';
import Modal from './Components/display/cards/Modal';

function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Upload/>
        <Cards setModal={setModal}/>
      </div>
      <Footer/>
      {modal && <Modal modal={modal} setModal={setModal}/>} 
    </div>
  );
}

export default App;
