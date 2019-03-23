import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ProgramPane from './ProgramPane';

const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);

const Meta = () => {
    return (
        <Helmet>
            <title>Dr.Ngo</title>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        </Helmet>
    )  
}

const ProgramList = (props) => {
    return (
        <React.Fragment>
            {props.programs.map((program, index) => (
                <ProgramPane key={index + 1} program={program} />
            ))}
        </React.Fragment>
    )
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta />
                <h1>Welcome to the office of Dr. Ngo!<br/>Help us help you by checking out the programs below.</h1>
                <ProgramList programs={programs} />
            </React.Fragment>
        )
    }
}

export default App;