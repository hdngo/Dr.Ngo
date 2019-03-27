import React, { Component } from 'react';
import { 
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Meta from './Meta';
import ProgramOverview from './ProgramOverview/index';
import Program from './Program/index';
import Section from './Section/index';
import FourZeroFour from './FourZeroFour';

// const programsData = require('../../program.json');
// const programs = Object.values(programsData.programs);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta />
                <Switch>
                    <Route exact path='/' component={ProgramOverview} />
                    <Route exact path='/programs/:programId' component={Program} />
                    <Route exact path={`/programs/:programId/sections/:sectionId`} component={Section} />
                    <Route component={FourZeroFour} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;