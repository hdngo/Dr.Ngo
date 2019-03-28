import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { completeAction } from './redux/actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';

let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
library.add(faCheckSquare, faChevronLeft, faChevronRight);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);