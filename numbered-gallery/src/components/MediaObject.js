import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MediaImg from './MediaImg';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import '../css/media-object.css';

export default function MediaObject(props) {
  const { imgUrl, alt, heading, text, className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object', className);

  return (
    <section className={ joinClasses } { ...moreProps }>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 mt-0 pr-0 pl-0">
            <MediaImg 
              className="w-100 pr-3"
              src={ imgUrl }
              alt={ alt }
            >
            </MediaImg>
          </div>
          <main className="col mr-2 ml-2">
            <MediaHeading className="mt-5" heading={ heading }></MediaHeading>
            <MediaText text={ text }></MediaText>
          </main>
        </div>
      </div>
      { children }
    </section>
  );
}

MediaObject.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
