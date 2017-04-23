import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MediaImg from './MediaImg';
import MediaHeading from './MediaHeading';
import MediaText from './MediaText';
import MediaButton from './MediaButton';
import '../css/media-object.css';

export default function MediaObject(props) {
  const { imgUrl, alt, heading, text, className, children, ...moreProps } = props;
  const joinClasses = classNames('media-object', className);
  const prevLabel = (
    <a className="small"><span className="vsmall">◀</span> PREV</a>
  );
  const nextLabel = (
    <a className="small">NEXT <span className="vsmall">▶</span></a>
  );

  return (
    <section className={ joinClasses } { ...moreProps }>
      <div className="row">
        <div className="col-md-9 mt-0 pr-0 pl-0">
          <MediaImg 
            className="w-100"
            src={ imgUrl }
            alt={ alt }
          >
          </MediaImg>
        </div>
        <main className="col mr-3 ml-4">
          <MediaHeading className="mt-4 pt-1 text-danger" heading={ heading }></MediaHeading>
          <MediaText text={ text }></MediaText>
          <section className="d-flex justify-content-between mt-5">
            <MediaButton className="btn" isDisabled={true} label={ prevLabel }>
            </MediaButton>
            <MediaButton className="btn btn-danger" label={ nextLabel }>
            </MediaButton>
          </section>
        </main>
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
