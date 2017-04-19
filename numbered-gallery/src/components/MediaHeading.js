import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-heading.css';

export default function MediaHeading(props) {
  const { heading, children, className, ...moreProps } = props;
  const joinClasses = classNames('media-heading', className);

  return (
    <header>
      <h5 className={ joinClasses } { ...moreProps }>{ heading }</h5>
      { children }
    </header>
  );
}

MediaHeading.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string
};