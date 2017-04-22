import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberBarButton from './NumberBarButton';
import '../css/numberbar.css';

export default function NumberBar(props) {
  const { images, className, buttonClick, currPos, children, ...moreProps } = props;
  const joinClasses = classNames('numberbar', className);

  return (
    <div className={ joinClasses } { ...moreProps }>
      <nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav font-weight-bold">
            { images.map((img, idx) => {
                let num = ++idx;
                let displayNum = num < 10 ? '0' + num : '' + num;

                return (
                  <NumberBarButton
                    label={ displayNum }
                    key={ num }
                    index={ num }
                    className="nav-item pr-4 pl-4"
                    anchorClassName="nav-link smaller"
                    buttonClick={ buttonClick }
                    currPos={ currPos }
                  >
                  </NumberBarButton>
                );
              })
            }
          </ul>
        </div>
      </nav>
      { children }
    </div>
  );
}

NumberBar.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
  buttonClick: PropTypes.func,
  currPos: PropTypes.number,
  children: PropTypes.node
};
