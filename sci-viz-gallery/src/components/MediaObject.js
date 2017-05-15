import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import MediaImg from './MediaImg';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import MediaButton from './MediaButton';
import '../css/media-object.css';
import ArrowRight from 'react-icons/lib/ti/arrow-right-thick';
import ArrowLeft from 'react-icons/lib/ti/arrow-left-thick';
import Download from 'react-icons/lib/ti/download';

export default function MediaObject(props) {
  const { image, move, imgLoaded, changeImgStatus, mediaButtons, className, children, ...moreProps } = props;
  const { id, url, pdfUrl, alt, heading, subheading, role, text } = image;
  const { prevButtonState, nextButtonState, mediaButtonClick } = mediaButtons;
  const joinClasses = classNames('media-object', className);
  const prevButtonClass = prevButtonState ? 
    "btn rounded-circle d-flex justify-content-center" :
    "btn rounded-circle d-flex justify-content-center btn-success enabled-btn";
  const nextButtonClass = nextButtonState ? 
    "btn rounded-circle d-flex justify-content-center" : 
    "btn rounded-circle d-flex justify-content-center btn-success enabled-btn";
  const prevLabel = (
    <div className="arrow-container">
      <a className="small">
        <ArrowLeft className="vsmall" />
      </a>
      <span className="sr-only">Previous</span>
    </div>
  );
  const nextLabel = (
    <div className="arrow-container">
      <a className="small">
        <ArrowRight className="vsmall" />
      </a>
      <span className="sr-only">Next</span>
    </div>
  );
  let pdfLink = ('');

  if (pdfUrl) {
    pdfLink = (
      <a className="fade-up pdf-text" href={ pdfUrl }>
      <Download className="pdf-icon"></Download>
      DOWNLOAD PDF
      </a>
    );
  } 

  return (
    <section className={ joinClasses } { ...moreProps }>
      <div className="row">
        <div className="col-md-8 mt-0 pr-0 pl-0">
          <MediaImg 
          src={ url }
          alt={ alt }
          move={ move }
          imgLoaded={ imgLoaded }
          changeImgStatus={ changeImgStatus }
          >
          </MediaImg>
        </div>
        <div className="col" style={ {height: '270px'} }>
          <main className="mr-2 pr-0 ml-4 mh-100">
            <Scrollbars
              className="mt-4"
              autoHeight
              autoHeightMin={ 110 }
              autoHeightMax={ 250 }
            >
              <MediaText className='fade-up sub-heading' text={ subheading }></MediaText>
              <MediaText className='fade-up role' text={ role }></MediaText>
              <MediaHeading key={ id + 'a' } className="fade-up mr-4" heading={ heading }></MediaHeading>
              <MediaText key={ id + 'b' } className="fade-up mr-4" text={ text }></MediaText>
            </Scrollbars>
            <section className="d-flex justify-content-between mt-4 pt-2 mr-3 pr-0">
              <MediaButton 
                className={ prevButtonClass }
                isDisabled={ prevButtonState }
                label={ prevLabel }
                buttonClick={ () => mediaButtonClick('decrease') }
              >
              </MediaButton>

              { pdfLink }

              <MediaButton 
                className={ nextButtonClass }
                isDisabled={ nextButtonState }
                label={ nextLabel }
                buttonClick={ () => mediaButtonClick('increase') }
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
  image: PropTypes.object,
  move: PropTypes.string,
  imgLoaded: PropTypes.bool,
  changeImgStatus: PropTypes.func,
  mediaButtons: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};
