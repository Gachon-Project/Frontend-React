import React from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Myr from './components/Myr';
import Myr2 from './components/Myr2';
import Myr3 from './components/Myr3';
import ImgUpload from './components/ImgUpload';
import ImgUpload2 from './components/ImgUpload2';
import Recipe from './components/Recipe';
import SearchMart from './components/SearchMart';
import Ads from './components/Ads';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route exact path='/' element={<><Content1></Content1><Content2></Content2><Ads></Ads></>}></Route>
          <Route exact path='/myr' element={<Myr></Myr>}></Route>
          <Route exact path='/myr2' element={<Myr2></Myr2>}></Route>
          <Route exact path="/myr2/:foodId" element={<Myr3></Myr3>}></Route>
          <Route exact path='/img' element={<ImgUpload></ImgUpload>}></Route>
          <Route exact path='/img2' element={<ImgUpload2></ImgUpload2>}></Route>
          <Route exact path='/recipe' element={<Recipe></Recipe>}></Route>
          <Route exact path='/recipe/:foodId' element={<Myr3></Myr3>}></Route>
          <Route exact path='/mart' element={<SearchMart></SearchMart>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;