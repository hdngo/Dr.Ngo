import React, { Component } from 'react';
import ProgramPane from './ProgramPane';
import { Route } from 'react-router-dom';
const ProgramList = ({programs}) => {

    return (
        <React.Fragment>
            {programs.map((program, index) => (
                <ProgramPane key={index} program={program} />
            ))}
        </React.Fragment>
    )
}

class ProgramOverview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ProgramList programs={this.props.programs} />
            </React.Fragment>
        )
    }
}

export default ProgramOverview;