import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);