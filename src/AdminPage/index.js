import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AdminPage1 } from './AdminPage';
import { AddEdit } from './AddEdit';

function AdminPage({ match }) {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={AdminPage1} />
            <Route path={`${path}/add`} component={AddEdit} />
            <Route path={`${path}/edit/:id`} component={AddEdit} />
        </Switch>
    );
}

export { AdminPage };