import React from 'react';
import DashboardMenu from './Menu';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutesView from '../../routing/Routes';

const Dashboard = ({logout}) => {

    return (
        <Router>
            <>
                <DashboardMenu logout={logout}/>
                <RoutesView/>
            </>
        </Router>
    )
};

export default Dashboard;
