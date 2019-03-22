import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const programData = require('../../program.json');

function Meta(props) {
    return (
        <Helmet>
            <title>Harvey Ngo</title>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        </Helmet>
    )  
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta />
                <div className='app'>
                    Hello World
                </div>
            </React.Fragment>
        )
    }
}

export default App;