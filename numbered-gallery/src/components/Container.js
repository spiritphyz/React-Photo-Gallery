import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../css/Container.css';

export default class Container extends Component {
  render() {
    const { title, children, className, ...moreProps } = this.props;
    const joinClasses = classNames('Container', className);

    return (
      <div className={ joinClasses } { ...moreProps }>
        <h1>{ title }</h1>
        <hr />
        <div>{ children }</div>
      </div>
    );
  }
}

// Type checking for development builds
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html#proptypes
Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string
};