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
      direction: 'increase',
      imgLoaded: false,
      image: {
        id: '',
        url: '',
        width: 0,
        height: 0,
        alt: '',
        heading: '',
        subheading: '',
        role: '',
        text: ''
      },
      pnButtons: {
        mediaButtonClick: () => {},
        prevButtonState: false,
        nextButtonState: false
      }
    };
    this.updateImgData = this.handleUpdateImgData.bind(this);
    this.updatePosition = this.handleChangePosition.bind(this);
    this.updateImgLoaded = this.handleUpdateImgLoaded.bind(this);
  } 

  handleMediaButtonClick(move='increase') {
    let currPos = this.state.currPos;
    const nextPos = move === 'increase' ? ++currPos : --currPos;
    if (nextPos > -1 && nextPos < this.state.images.length) {
      this.updateImgData(nextPos, move);
    }
  }

  handleUpdateImgData(newIdx=this.state.currPos, move='increase') {
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
      direction: move,
      imgLoaded: false,
      image: {
        id: currImg.id,
        url: currImg.url,
        width: currImg.width,
        height: currImg.height,
        alt: currImg.alt,
        heading: currImg.title,
        subheading: currImg.subheading,
        role: currImg.role,
        text: currImg.description 
      },
      pnButtons: {
        mediaButtonClick: this.handleMediaButtonClick.bind(this),
        prevButtonState: prevButtonState,
        nextButtonState: nextButtonState
      }
    });
  }

  handleChangePosition(newIdx) {
    const isValidNum = newIdx > -1 && newIdx < this.state.images.length;
    if (isValidNum) {
      return Store.setPosition(newIdx);
    } else {
      console.log(`🍊  invalid index given to handleChangePosition: ${newIdx}`);
    }
  }

  handleUpdateImgLoaded() {
    this.setState({imgLoaded: true});
  }

  componentDidMount() {
    this.updateImgData();
    // this.setState({
    //   pnButtons: {
    //     mediaButtonClick: this.handleMediaButtonClick.bind(this)
    //   }
    // });
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
            image={ this.state.image }
            move={ this.state.direction }
            imgLoaded={ this.state.imgLoaded }
            changeImgStatus={ this.updateImgLoaded }
            mediaButtons={ this.state.pnButtons }
          >
          </MediaObject>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
