
import React from 'react';
import PropTypes from 'prop-types';


export class Images extends React.Component {
  render() {

    return (
      <section id={this.props.identifier}>
      <h3>{this.props.text}</h3>
      <img src={this.props.source} width="300" height="300"/>
      <p>{this.props.paragraph}</p>
      </section>
    )
  }
}

Images.propTypes = {
  identifier: PropTypes.string.isRequired,
  text: PropTypes.string,
  source: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}
