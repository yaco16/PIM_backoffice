/* eslint-disable no-console */
import React from 'react';
import {
  Dimmer,
  Loader,
  Image,
  Segment,
} from 'semantic-ui-react';

const LoaderForm = () => {
  console.log('je suis dans Loader');
  return (
    <div>
      <Segment>
        <Dimmer active>
          <Loader>Patience...</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>

      <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>

        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    </div>
  );
};

export default LoaderForm;
