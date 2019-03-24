import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { 
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import ModalLink from './ModalLink';
// import SectionCard from './SectionCard';

import FourZeroFour from './FourZeroFour';

const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);

const topics = [
    {
      name: 'React Router',
      id: 'react-router',
      description: 'Declarative, component based routing for React',
      resources: [
        {
          name: 'URL Parameters',
          id: 'url-parameters',
          description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
          url: 'https://tylermcginnis.com/react-router-url-parameters/'
        },
        {
          name: 'Programatically navigate',
          id: 'programmatically-navigate',
          description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
          url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
        }
      ]
    },
    {
      name: 'React.js',
      id: 'reactjs',
      description: 'A JavaScript library for building user interfaces',
      resources: [
        {
          name: 'React Lifecycle Events',
          id: 'react-lifecycle',
          description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
          url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
        },
        {
          name: 'React AHA Moments',
          id: 'react-aha',
          description: "A collection of 'Aha' moments while learning React.",
          url: 'https://tylermcginnis.com/react-aha-moments/'
        }
      ]
    },
    {
      name: 'Functional Programming',
      id: 'functional-programming',
      description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
      resources: [
        {
          name: 'Imperative vs Declarative programming',
          id: 'imperative-declarative',
          description: 'A guide to understanding the difference between Imperative and Declarative programming.',
          url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
        },
        {
          name: 'Building User Interfaces with Pure Functions and Function Composition',
          id: 'fn-composition',
          description: 'A guide to building UI with pure functions and function composition in React',
          url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
        }
      ]
    }
  ]

const Meta = () => {
    return (
        <Helmet>
            <title>Dr.Ngo</title>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        </Helmet>
    )  
}

function Section ({match}) {
    const program = programs.find(({name}) => name.toLowerCase() === match.params.programName.replace(/-/g, ' '));
    const section = program.sections.find(({name}) => name.toLowerCase() === match.params.sectionName.replace(/-/g, ' '));
    return (
        <React.Fragment>
            { program && section ?  
                <h1>{section.name}</h1> 
                :
                <FourZeroFour />
            }
        </React.Fragment>
    )
}

function SectionCard (props) {
    return (
        <div className='section'>
            <img src={props.section.image} className='section-image' alt={`${props.section.name.toLowerCase().replace(/\s/g, '-')} overview image.`} />
            <h3 className='section__order'>{`Part ${props.section.order + 1}`}</h3>
            <h4 className='section__name'>{props.section.name}</h4>
        </div>
    )
}

function Program ({match}) {
    const program = programs.find(({name}) => name.toLowerCase() === match.params.programName.toLowerCase().replace(/-/g, ' '));
    return (
        <React.Fragment>
            { program ? 
                <div className='program-pane'>
                    <div className='program-pane-header'>
                        <h2 className='program-name'>{program.name}</h2>
                        <ModalLink text={'Learn More'} modalText={program.description} />
                    </div>
                    <ul className='program-sections'>
                        {program.sections.map(section => (
                            <li key={`${program.name}-section-${section.order}`} className='program-section'>
                                <Link to={`${match.url}/sections/${section.name.toLowerCase()}`} className='section-card'>
                                    <SectionCard program={program} section={section} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <FourZeroFour />
            }
        </React.Fragment>
    )
}

function ProgramOverview ({match}) {
    return (
        <React.Fragment>
            {programs.map((program, index) => (
                <div key={`program-pane-${index}`}className='program-pane'>
                    <div className='program-pane-header'>
                        <h2 className='program-name'><Link to={`${match.url}/${program.name.toLowerCase().replace(/\s/g, '-')}`}>{program.name}</Link></h2>
                        <ModalLink text={'Learn More'} modalText={program.description} />
                    </div>
                    <ul className='program-sections'>
                        {program.sections.map(section => (
                            <li key={`${program.name}-section-${section.order}`} className='program-section'>
                                <Link to={`${match.url}/${program.name.toLowerCase().replace(/\s/g, '-')}/sections/${section.name.toLowerCase().replace(/\s/g, '-')}`} className='section-card'>
                                    <SectionCard program={program} section={section} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </React.Fragment>
    )
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/programs'>Programs</Link></li>
                </ul>
                <Route exact path='/' component={Home} />
                <Route exact path='/programs' component={ProgramOverview} />
                <Route exact path={`/programs/:programName`} component={Program} />
                <Route exact path={`/programs/:programName/sections/:sectionName`} component={Section} />
            </React.Fragment>
        )
    }
}

export default App;