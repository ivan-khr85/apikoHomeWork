import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Container';
import QuestionPage from '../QuestionPage/Container'
import SignIn from '../SignIn/Container';
import SignUp from '../SignUp/Container';
import RestorePassword from '../RestorePassword/Container';
import QuestionForm from '../QuestionForm/Container';
import NotFound from '../NotFound/Component';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/restore-password" component={RestorePassword} />
    <Route exact path="/question/new" component={QuestionForm} />
    <Route path="/question/edit/:questionId" component={QuestionForm} />
    <Route path="/question/:questionId" component={QuestionPage} />
    <Route component={NotFound} />
  </Switch>
);


export default Routes;
