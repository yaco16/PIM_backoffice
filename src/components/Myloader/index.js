/* eslint-disable no-console */
import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const MyLoader = () => (
  <div>
    <Dimmer active inverted>
      <Loader size="massive">Loading</Loader>
    </Dimmer>
  </div>
);

export default MyLoader;
