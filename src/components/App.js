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

/* I would've ideally liked to deal with making the routes as dynamic as possible throughout the app, and also
create a url helper function that'd regex and replace the program & section names. I originaly had a function but I removed it because it
required me to make excessive string manipulations to look up items by their names. */