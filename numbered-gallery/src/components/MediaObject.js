import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import MediaImg from './MediaImg';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import MediaButton from './MediaButton';
import '../css/media-object.css';
import '../css/typicons.css';

export default function MediaObject(props) {
  const { imgID, imgUrl, imgWidth, imgHeight, alt, imgLoaded, changeImgStatus, heading, text, prevButtonState, nextButtonState, buttonClick, className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object', className);
  const prevButtonClass = prevButtonState ? "btn" : "btn btn-danger";
  const nextButtonClass = nextButtonState ? "btn" : "btn btn-danger";
  const prevLabel = (
    <div><span className="typcn typcn-media-play-reverse vsmall"></span><a className="small">PREV</a></div>
  );
  const nextLabel = (
    <div><a className="small">NEXT</a><span className="typcn typcn-media-play vsmall"></span></div>
  );

  return (
    <section className={ joinClasses } { ...moreProps }>
      <div className="row">
        <div className="col-md-8 mt-0 pr-0 pl-0">
            <div>
              <MediaImg 
                className="img-fluid"
                src={ imgUrl }
                imgWidth={ imgWidth }
                imgHeight={ imgHeight }
                alt={ alt }
                imgLoaded={ imgLoaded }
                changeImgStatus={ changeImgStatus }
              >
              </MediaImg>
            </div>
        </div>
        <div className="col" style={ {height: '270px'} }>
          <main className="mr-2 pr-0 ml-4 mh-100">
            <Scrollbars
              className="mt-4"
              autoHeight
              autoHeightMin={ 110 }
              autoHeightMax={ 250 }
            >
              <MediaHeading key={ imgID + 'a' } className="mr-4 text-danger" heading={ heading }></MediaHeading>
              <MediaText key={ imgID + 'b' } className="mr-4" text={ text }></MediaText>
            </Scrollbars>
            <section className="d-flex justify-content-between mt-4 pt-2 mr-3 pr-3">
              <MediaButton 
                className={ prevButtonClass }
                isDisabled={ prevButtonState }
                label={ prevLabel }
                buttonClick={ () => buttonClick('decrease') }
              >
              </MediaButton>
              <MediaButton 
                className={ nextButtonClass }
                isDisabled={ nextButtonState }
                label={ nextLabel }
                buttonClick={ () => buttonClick('increase') }
              >
              </MediaButton>
            </section>
          </main>
        </div>
      </div>
      { children }
    </section>
  );
}

MediaObject.propTypes = {
  imgID: PropTypes.string,
  imgUrl: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  alt: PropTypes.string,
  imgLoaded: PropTypes.bool,
  changeImgStatus: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  prevButtonState: PropTypes.bool,
  nextButtonState: PropTypes.bool,
  buttonClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};
