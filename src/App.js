import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Footer from './components/Footer';
import Myr from './components/Myr';
import Myr2 from './components/Myr2';
import ImgUpload from './components/ImgUpload';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode: 'home'
    }
  }
  render() {
    var _home = null;
    if(this.state.mode === 'home'){
      _home = <div>
        <Content1 onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Content1>
        <Content2></Content2>
      </div>
    }
    else if(this.state.mode === 'imgupload'){
      _home = <div>
        <ImgUpload></ImgUpload>
      </div>
    }
    else if(this.state.mode === 'myr'){
      _home = <Myr></Myr>
    }
    else if(this.state.mode === 'recipe'){
      _home = <Myr2></Myr2>
    }
    return(
      <div className='App'>
        <Header></Header>

        <Nav onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });
        }.bind(this)}></Nav>

        {_home}

        <Footer></Footer>
      </div>
    );
  }
}

export default App;