import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/numberbar.css';

export default function NumberBar(props) {
  const { images, className, children, ...moreProps } = props;
  const joinClasses = classNames('numberbar', className);
  console.log('🍊  classes are', joinClasses);

  return (
    <div className={ joinClasses } { ...moreProps }>
      <nav>
        <ul>
        { images.map((img, idx) => {
            let num = ++idx;
            let displayNum = num < 10 ? '0' + num : num;
            return (
              <li key={ num }>
              <a href="">
                { displayNum }
              </a>
              </li>
            );
          })
        }
        </ul>
      </nav>
      { children }
    </div>
  );
}

Number.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node
};
