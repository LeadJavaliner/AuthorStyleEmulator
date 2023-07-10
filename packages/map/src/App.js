import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Map from './components/Map';

console.log('imported Map');
console.log(Map);


const generateClassName = createGenerateClassName({
  productionPrefix: 'map',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
        <Switch>
            <Map />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
