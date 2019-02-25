import React, { Component } from 'react';
import './App.css';
import Keys from './components/Keys';
import Output from './components/Output';

class App extends Component {
  state = {
    result: ''
  }

  buttonPressed = (buttonName) => {
    if(buttonName === '='){
      this.calculate()
    } else if (buttonName === 'C') {
      this.reset();
    } else if (buttonName === 'CE') {
      this.backspace();
    } else
        this.setState({
          result:this.state.result + buttonName
        });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  calculate = () => {
    try {
      this.setState({
      result: (eval(this.state.result) || "") + ""
    });} catch(e){
      this.setState({
        result: 'Error'
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.state.result} />
          <Keys buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
