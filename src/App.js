import React from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Myr from './components/Myr';
import Myr2 from './components/Myr2';
import ImgUpload from './components/ImgUpload';
import ImgUpload2 from './components/ImgUpload2';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<><Content1></Content1><Content2></Content2></>}></Route>
          <Route path='/myr' element={<Myr></Myr>}></Route>
          <Route path='/myr2' element={<Myr2></Myr2>}></Route>
          <Route path='/img' element={<ImgUpload></ImgUpload>}></Route>
          <Route path='/img2' element={<ImgUpload2></ImgUpload2>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;