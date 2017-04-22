import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/numberbar-button.css';

export default function NumberBarButton(props) {
  const { label, index, className, anchorClassName, buttonClick, children, ...moreProps } = props;
  const joinClasses = classNames('numberbar-button', className);
  const imgIdx = index - 1;

  return (
    <div className={ joinClasses } onClick={ () => buttonClick(imgIdx) } { ...moreProps }>
      <li>
        <a href="#" className={ anchorClassName }>{ label }</a>
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
  children: PropTypes.node
};
