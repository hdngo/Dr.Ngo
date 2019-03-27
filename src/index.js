import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import store from './redux/store';
import { completeAction } from './redux/actions';

// redux test
// window.store = store;
// window.completeAction = completeAction; 
// end redux test

let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

// const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        document.getElementById('app')
    );
// };

// store.subscribe(render);
// render();