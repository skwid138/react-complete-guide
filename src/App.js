import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    // * This is the more common way to write JSX
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a react app</h1>
    //   </div>
    // );

    // * This is the exact same thing as above, but written the long way
    return React.createElement('div', {className:'App'}, React.createElement('h1', null,'worrrrrd'))
  }
}

export default App;
