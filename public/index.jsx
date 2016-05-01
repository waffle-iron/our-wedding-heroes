import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import jwtDecode from 'jwt-decode';

import history from './helpers/history';
import routes from './routes';
import alt from './helpers/alt';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';
import 'toastr/build/toastr.css';
import '@insidersbyte/react-markdown-editor/dist/css/react-markdown-editor.css';
import './index.styl';

const jwt = localStorage.getItem('jwt');

// TODO: Wrap local storage to return undefined in this instance
if (jwt !== 'undefined') {
    // TODO: maybe use final store here? http://survivejs.com/webpack_react/react_and_flux/
    alt.bootstrap(JSON.stringify({
        LoginStore: {
            jwt,
            user: jwtDecode(jwt),
            isLoggedIn: true,
        },
    }));
}

ReactDOM.render(
    <Router history={history}>
        {routes}
    </Router>,
    document.getElementById('content')
);
