import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/numberbar-button.css';

export default function NumberBarButton(props) {
  const { label, uniqKey, className, anchorClassName, children, ...moreProps } = props;
  const joinClasses = classNames('numberbar-button', className);

  return (
    <div className={ joinClasses } { ...moreProps }>
      <li key={ uniqKey }>
        <a href="#" className={ anchorClassName }>{ label }</a>
      </li>
      { children }
    </div>
  );
}

NumberBarButton.propTypes = {
  label: PropTypes.string,
  uniqKey: PropTypes.string,
  className: PropTypes.string,
  anchorClassName: PropTypes.string,
  children: PropTypes.node
};
