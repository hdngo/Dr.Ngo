import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { 
    Route,
    Link,
    Switch
} from 'react-router-dom';
import ProgramOverview from './ProgramOverview';
import Section from './Section';
import FourZeroFour from './FourZeroFour';

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

class App extends Component {
    render() {
        return (
            <Route render={({location}) => (

                <React.Fragment>
                    <Meta />
                    <Switch location={location}>
                        <Route 
                            exact path='/' 
                            render={(props) => <ProgramOverview {...props} programs={programs} />}
                        />
                        <Route exact path='/:program/section/:order' 
                            render={(props) => <Section {...props} programs={programs} />}
                        />
                        <Route component={FourZeroFour} />
                    </Switch>
                </React.Fragment>
            )}/>
        )
    }
}

export default App;