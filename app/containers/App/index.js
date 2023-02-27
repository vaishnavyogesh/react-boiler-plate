/**
 *
 * App.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grommet } from 'commonsv2/components/Grommet';
import { hb } from 'mnet-ui-base-theme-hb';
import Router from '../../pages/index';

function App({ match }) {
  return (
    <Grommet theme={hb}>
      <Router match={match} />
    </Grommet>
  );
}

App.propTypes = {
  match: PropTypes.object.isRequired,
};

export default App;

