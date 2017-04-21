import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberBarButton from './NumberBarButton';
import '../css/numberbar.css';

export default function NumberBar(props) {
  const { images, className, children, ...moreProps } = props;
  const joinClasses = classNames('numberbar', className);

  return (
    <div className={ joinClasses } { ...moreProps }>
      <nav>
        <ul className="navbar-nav font-weight-bold">
        { images.map((img, idx) => {
            let num = ++idx;
            let displayNum = num < 10 ? '0' + num : num;

            return (
              <NumberBarButton
                label={ displayNum }
                key={ num }
                className="nav-item pr-4 pl-4"
                anchorClassName="nav-link smaller"
              >
              </NumberBarButton>
            );
          })
        }
        </ul>
      </nav>
      { children }
    </div>
  );
}

NumberBar.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node
};
