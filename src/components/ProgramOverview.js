import React, { Component } from 'react';
import ProgramPane from './ProgramPane';

const ProgramList = ({programs}) => {
    return (
        <React.Fragment>
            {programs.map((program, index) => (
                <ProgramPane key={index + 1} program={program} />
            ))}
        </React.Fragment>
    )
}

class ProgramOverview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.programs);
        return (
            <React.Fragment>
                <h1>Welcome to the office of Dr. Ngo!<br/>Help us help you by checking out the programs below.</h1>
                <ProgramList programs={this.props.programs} />
            </React.Fragment>
        )
    }
}

export default ProgramOverview;