import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-text.css';

export default function MediaText(props) {
  const { text, className, children,...moreProps } = props;
  const joinClasses = classNames('media-object-text', className);

  return (
    <div>
      <div className={ joinClasses } { ...moreProps }>{ text }</div>
      { children }
    </div>
  );
}

MediaText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
