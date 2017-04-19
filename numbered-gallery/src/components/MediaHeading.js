import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-heading.css';

export default function MediaHeading(props) {
  const { heading, className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object-heading', className);

  return (
    <header>
      <h5 className={ joinClasses } { ...moreProps }>{ heading }</h5>
      { children }
    </header>
  );
}

MediaHeading.propTypes = {
  heading: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
