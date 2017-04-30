import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-img.css';

export default function MediaImg(props) {
  const { move='increase', imgUrl, alt='Main Image', imgLoaded, changeImgStatus, className, children, ...moreProps } = props;
  let moveOptions = {};
  let joinClasses = '';
  
  moveOptions = move === 'increase' ?
    {
      'slide-to-right': true,
      'slide-to-left': false
    } :
    {
      'slide-to-left': true,
      'slide-to-right': false
    };

  if (imgLoaded) {
    joinClasses = classNames('media-object-img', 'fade-on', moveOptions, className);
  } else {
    joinClasses = classNames('media-object-img', 'fade-off', className);
  }

  return (
    <div className="clip">
      <img
        src={ imgUrl }
        className={ joinClasses }
        width="100%"
        alt={ alt }
        onLoad={ () => changeImgStatus() }
        { ...moreProps }
      />
      { children }
    </div>
  );
}

MediaImg.propTypes = {
  move: PropTypes.string,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  imgLoaded: PropTypes.bool,
  changeImgStatus: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};
