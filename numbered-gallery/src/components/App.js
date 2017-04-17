import React from 'react';
import { Component } from 'react';
import { Store } from './Store';
import Container from './Container';
import centrifuge from '../images/centrifuge-insert_1920x1280.jpg';
import '../css/App.css';

let title = Store.imageData[0].title;

class App extends Component {
  render() {
    console.log(`title: ${title}`);
    return (
      <div className="App">
        <Container
          title={ title } 
          className="greenbg"
          onClick={ e => console.log('app was clicked') }
        >
          <img
            src={ centrifuge }
            style={ {width: "100%"} }
            alt="operating a centrifuge"
          />
        </Container>
      </div>
    );
  }
}

export default App;