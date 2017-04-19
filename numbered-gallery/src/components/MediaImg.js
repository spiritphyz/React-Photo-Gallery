import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-img.css';

export default function MediaImg(props) {
  const { imgUrl, alt='Main Image', className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object-img', className);

  return (
    <div>
      <img
        src={ imgUrl }
        className={ joinClasses }
        alt={ alt }
        { ...moreProps }
      />
      { children }
    </div>
  );
}

MediaImg.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
