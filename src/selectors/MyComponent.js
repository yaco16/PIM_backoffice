/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Country from 'src/containers/Country';
import Currency from 'src/containers/Currency';
import ListDetails from 'src/components/ListDetails';

class MyComponent extends Component {
  components = {
    country: Country,
    currency: Currency,
    listDetails: ListDetails,
  };

  render() {
    const { tag } = this.props;
    const TagName = this.components[tag || 'error'];
    return <TagName />;
  }
}

MyComponent.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default MyComponent;
