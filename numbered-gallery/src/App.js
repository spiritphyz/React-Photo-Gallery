import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// tell WebPack the location of images for build phase
import logo from './logo.svg';

let Store = {
  imageData: [{
    id: '',
    url: '',
    title: '',
    description: '',
    width: 0,
    height: 0,
  }],
  currPosition: 0,
  getPosition: function() {
    return this.currPosition;
  },
  setPosition: function(newPosition) {
    this.currPosition = newPosition;
  },
  getImages: function() {
    return this.imageData;
  },
  setImages: function(newImageData) {
    this.imageData = newImageData;
  } 
};

class Title extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h1>here are the children of the h1 tag: {this.props.children}</h1>
        <a onClick={ this.props.logoClicked }>
          <img src={ logo } width="100" height="100" alt='react logo'/>
        </a>
      </div>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string
};

Title.defaultProps = {
  text: 'hello world'
};

class App extends Component {
  logoClicked() {
    console.log('logo was clicked!');
  }
  render() {
    return (
      <div className="App">
        <Title text='yo and yo' logoClicked={ this.props.logoClicked }>
          <span>community</span>
        </Title>
      </div>
    );
  }
}

export default App;
