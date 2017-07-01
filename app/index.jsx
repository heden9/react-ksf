import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import RouterMap from './router/routerMap';
import './config/flexible';
render(
    <RouterMap history={hashHistory}/>,
    document.getElementById('root')
);