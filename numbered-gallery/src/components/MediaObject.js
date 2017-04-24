import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import MediaImg from './MediaImg';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import MediaButton from './MediaButton';
import '../css/media-object.css';

export default function MediaObject(props) {
  const { imgUrl, alt, heading, text, prevButtonState, nextButtonState, buttonClick, className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object', className);
  const prevButtonClass = prevButtonState ? "btn" : "btn btn-danger";
  const nextButtonClass = nextButtonState ? "btn" : "btn btn-danger";
  const prevLabel = (
    <a className="small"><span className="vsmall">&#9664;</span> PREV</a>
  );
  const nextLabel = (
    <a className="small">NEXT <span className="vsmall">▶</span></a>
  );

  return (
    <section className={ joinClasses } { ...moreProps }>
      <div className="row">
        <div className="col-md-8 mt-0 pr-0 pl-0">
          <MediaImg 
            className="w-100"
            src={ imgUrl }
            alt={ alt }
          >
          </MediaImg>
        </div>
        <main className="col mr-2 pr-0 ml-4">
          <Scrollbars
            className="mt-4"
            autoHeight
            autoHeightMin={ 100 }
            autoHeightMax={ 400 }
          >
            <MediaHeading className="mr-4 text-danger" heading={ heading }></MediaHeading>
            <MediaText className="mr-4" text={ text }></MediaText>
          </Scrollbars>
          <section className="d-flex justify-content-between mt-4 mr-4">
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
      { children }
    </section>
  );
}

MediaObject.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  prevButtonState: PropTypes.bool,
  nextButtonState: PropTypes.bool,
  buttonClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};
