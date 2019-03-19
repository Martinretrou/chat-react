import React from 'react';
import { Login } from './views/Login';
import { Profile } from './views/Profile';
import { Chat } from './views/chat/Chat';
import { Dashboard } from './views/dashboard/Dashboard';
import { DashboardSettings } from './views/dashboard/DashboardSettings';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard/settings" component={DashboardSettings} />
        <Route exact path="/chat/:chatId" component={Chat} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
};