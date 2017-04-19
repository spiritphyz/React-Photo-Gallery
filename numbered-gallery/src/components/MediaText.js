import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-text.css';

export default function MediaText(props) {
  const { text, children, className, ...moreProps } = props;
  const joinClasses = classNames('media-text', className);

  return (
    <div>
      <div className={ joinClasses } { ...moreProps }>{ text }</div>
      { children }
    </div>
  );
}

MediaText.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};