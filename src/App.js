import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Home from './components/Home';
import Footer from './components/Footer';
import Myr from './components/Myr';

class First_p extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'home',
      home: 
        <div>
          <Content1></Content1>
          <Content2></Content2>
        </div>
    }
  }

  render(){
    return(
      <div>
        <Home data = {this.state.home}></Home>
      </div>
    );
  }
}

class Second_p extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'home',
      home: 
        <div>
          <Myr></Myr>
        </div>
    }
  }
  render(){
    return(
      <div>
        <Home data = {this.state.home}></Home>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      logs: [
        {id:1, title:'Sign in'},
        {id:2, title:'Sign out'},
        {id:3, title:'Sign up'},
        {id:4, title:'Mypage'}
      ],
      contents:[
        {id:1, title:'HOME'},
        {id:2, title:'나의 냉장고'},
        {id:3, title:'레시피'}
      ]
    }
  }
  render() {
    return(
      <BrowserRouter className="App">
        <Header data = {this.state.logs}></Header>
        <Nav data = {this.state.contents}></Nav>
        <Routes>
          <Route path="/" element={<First_p />} />
          <Route path="/nav_contents/1" element={<First_p />} />
          <Route path="/nav_contents/2" element={<Second_p />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;