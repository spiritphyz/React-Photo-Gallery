import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/media-object-button.css';

export default function MediaButton(props) {
  const { label, isDisabled, className, buttonClick, children, ...moreProps } = props;
  const joinClasses = classNames('media-object-button', className);
  let button;
  if (isDisabled) {
    button = (
      <button type="button" className={ joinClasses } disabled onClick={ () => buttonClick() } { ...moreProps }>
        { label }
      </button>
    ); 
  } else {
    button = (
      <button type="button" className={ joinClasses } onClick={ () => buttonClick() } { ...moreProps }>
        { label }
      </button>
    ); 
  }

  return (
    <div>
      { button }
      { children }
    </div>
  );
}

MediaButton.propTypes = {
  label: PropTypes.element,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  buttonClick: PropTypes.func,
  children: PropTypes.node
};
