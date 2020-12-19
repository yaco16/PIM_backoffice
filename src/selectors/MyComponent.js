import React, { Component } from 'react';
import Country from 'src/containers/Country';
import Currency from 'src/containers/Currency';
// import BarComponent from './bar-component';

class MyComponent extends Component {
  components = {
    country: Country,
    currency: Currency,
  };

  render() {
    const TagName = this.components[this.props.tag || 'error'];
    return <TagName />;
  }
}
export default MyComponent;
