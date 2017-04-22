import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/numberbar-button.css';

export default function NumberBarButton(props) {
  const { label, index, className, anchorClassName, buttonClick, currPos, children, ...moreProps } = props;
  const imgIdx = index - 1;
  let joinClasses;
  let joinAnchorClasses;

  if (currPos === imgIdx) {
    joinClasses = classNames('numberbar-button', 'underline', className);
    joinAnchorClasses = classNames('active', anchorClassName);
  } else {
    joinClasses = classNames('numberbar-button', className);
    joinAnchorClasses = classNames(anchorClassName);
  }


  return (
    <div className={ joinClasses } onClick={ () => buttonClick(imgIdx) } { ...moreProps }>
      <li>
        <a href="#" className={ joinAnchorClasses }>{ label }</a>
      </li>
      { children }
    </div>
  );
}

NumberBarButton.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  className: PropTypes.string,
  anchorClassName: PropTypes.string,
  buttonClick: PropTypes.func,
  currPos: PropTypes.number,
  children: PropTypes.node
};
