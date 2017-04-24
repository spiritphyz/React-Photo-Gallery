import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-img.css';

export default function MediaImg(props) {
  const { imgUrl, imgWidth, imgHeight, alt='Main Image', imgLoaded, changeImgStatus, className, children, ...moreProps } = props;
  let joinClasses;
  
  if (imgLoaded) {
    joinClasses = classNames('media-object-img', 'fade-on', className);
  } else {
    joinClasses = classNames('media-object-img', 'fade-off', className);
  }

  return (
    <div>
      <img
        src={ imgUrl }
        className={ joinClasses }
        width={ imgWidth }
        height={ imgHeight }
        alt={ alt }
        onLoad={ () => changeImgStatus() }
        { ...moreProps }
      />
      { children }
    </div>
  );
}

MediaImg.propTypes = {
  imgUrl: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  alt: PropTypes.string,
  imgLoaded: PropTypes.bool,
  changeImgStatus: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};
