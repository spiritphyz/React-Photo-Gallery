import React from 'react';
import { Store } from './Store';
import Container from './Container';
import MediaObject from './MediaObject';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import '../css/app.css';

let title = Store.imgData[1].title;
let imgUrl = Store.imgData[1].url;
let text = Store.imgData[1].description;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaObject
          className="col mr-2 ml-2" 
          text={ text }>
            <MediaHeading className="mt-5" heading={ title }></MediaHeading>
            <MediaText text={ text }></MediaText>
        </MediaObject> 
        <Container
          title={ title } 
          className="greenbg"
          onClick={ e => console.log('app was clicked') }
        >
          <img
            src={ imgUrl }
            style={ {width: "100%"} }
            alt={ title }
          />
        </Container>
      </div>
    );
  }
}

export default App;