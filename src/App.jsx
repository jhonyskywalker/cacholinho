import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';

import GlobalStyle from './designSystem/globalStyle';
import store, { history } from './redux-flow';

export const Home = Loadable({
  loader: () => import('containers/Pages/Home'),
  loading: () => null,
});

export default () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Fragment>
);
