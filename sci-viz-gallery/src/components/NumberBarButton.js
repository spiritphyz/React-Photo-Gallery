import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/numberbar-button.css';

export default function NumberBarButton(props) {
  const { label, responsiveLabel, index, className, anchorClassName, asideClassName, buttonClick, currPos, children, ...moreProps } = props;
  const imgIdx = index - 1;
  let joinClasses;
  let joinAnchorClasses;
  let joinAsideClasses;
  let screenReaderTag = '';

  if (currPos === imgIdx) {
    joinClasses = classNames('numberbar-button', 'underline', className);
    joinAnchorClasses = classNames('active', anchorClassName);
    joinAsideClasses = classNames(asideClassName);
    screenReaderTag = (
      <span className="sr-only">(current)</span>
    );
  } else {
    joinClasses = classNames('numberbar-button', className);
    joinAnchorClasses = classNames(anchorClassName);
    joinAsideClasses = classNames(asideClassName);
  }


  return (
    <div className={ joinClasses } onClick={ () => buttonClick(true, imgIdx) } { ...moreProps }>
      <li>
        <a href="#" className={ joinAnchorClasses }>
          { label }
          { screenReaderTag }
          <aside className={ joinAsideClasses }>
            { responsiveLabel }
          </aside>
        </a>
      </li>
      { children }
    </div>
  );
}

NumberBarButton.propTypes = {
  label: PropTypes.string,
  responsiveLabel: PropTypes.string,
  index: PropTypes.number,
  className: PropTypes.string,
  anchorClassName: PropTypes.string,
  asideClassName: PropTypes.string,
  buttonClick: PropTypes.func,
  currPos: PropTypes.number,
  children: PropTypes.node
};
