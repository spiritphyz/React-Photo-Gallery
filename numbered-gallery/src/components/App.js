import React from 'react';
import { Store } from './Store';
import MediaObject from './MediaObject';
import NumberBar from './NumberBar';
import '../css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: Store.imgData,
      currPos: Store.position,
      imgUrl: '',
      alt: '',
      heading: '',
      text: '',
      disablePrevButton: false,
      disableNextButton: false
    };
    this.MediaButtonClick = this.handleMediaButtonClick.bind(this);
    this.updateImgData = this.handleUpdateImgData.bind(this);
    this.updatePosition = this.handleChangePosition.bind(this);
  } 

  handleMediaButtonClick(move = 'increase') {
    let currPos = this.state.currPos;
    const nextPos = move === 'increase' ? ++currPos : --currPos;
    if (nextPos > -1 && nextPos < this.state.images.length) {
      this.updateImgData(nextPos);
    }
  }

  handleChangePosition(newIdx) {
    const isValidNum = newIdx > -1 && newIdx < this.state.images.length;
    if (isValidNum) {
      return Store.setPosition(newIdx);
    } else {
      console.log('🍊  invalid index given to handleChangePosition:', newIdx);
    }
  }

  handleUpdateImgData(newIdx = this.state.currPos) {
    const currPos = this.updatePosition(newIdx);
    const currImg = this.state.images[currPos];
    let prevButtonState = false;
    let nextButtonState = false;

    if (currPos === 0) {
      prevButtonState = true;
    }
    if (currPos === this.state.images.length - 1) {
      nextButtonState = true;
    }

    this.setState({
      currPos: currPos,
      imgUrl: currImg.url,
      alt: currImg.alt,
      heading: currImg.title,
      text: currImg.description,
      disablePrevButton: prevButtonState,
      disableNextButton: nextButtonState
    });
  }

  componentDidMount() {
    this.updateImgData();
  }

  render() {
    return (
      <div className="app">
        <div className="container-fluid">
          <div className="row"> 
            <NumberBar
              images={ this.state.images }
              className="navbar navbar-toggleable-sm navbar-inverse bg-faded pt-0 pb-0 w-100 gradient-bg"
              buttonClick={ this.updateImgData }
              currPos={ this.state.currPos }
            >
            </NumberBar>
          </div>
          <MediaObject
            imgUrl={ this.state.imgUrl }
            alt={ this.state.alt }
            heading={ this.state.heading }
            text={ this.state.text }
            prevButtonState={ this.state.disablePrevButton }
            nextButtonState={ this.state.disableNextButton }
            buttonClick={ this.MediaButtonClick }
          >
          </MediaObject>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
