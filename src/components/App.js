import React, { Component } from 'react';
import { 
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Meta from './Meta';
import Home from './Home';
import ModalLink from './ModalLink';
import ProgramOverview from './ProgramOverview';
import Section from './Section';
import FourZeroFour from './FourZeroFour';

const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Meta />
                <Route exact path='/' component={Home} />
                <Route exact path='/programs' component={ProgramOverview} />
                <Route exact path={`/programs/:programName/sections/:sectionName`} component={Section} />
            </React.Fragment>
        )
    }
}

export default App;