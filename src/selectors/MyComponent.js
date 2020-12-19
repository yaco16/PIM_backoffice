import React, { Component } from 'react';
import Country from 'src/containers/Country';
// import BarComponent from './bar-component';

class MyComponent extends Component {
  components = {
    country: Country,
    // bar: BarComponent,
  };

  render() {
    const TagName = this.components[this.props.tag || 'country'];
    return <TagName />;
  }
}
export default MyComponent;
