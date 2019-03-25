import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }

    }

    markAnswer = () => {
        this.setState(prevState => ({selected: !prevState.selected}));
    }
    render() {
        return (
            <button onClick={this.markAnswer}>{this.props.text} {this.state.selected ? 'active' : 'inactive'}</button>
        )
    }
}

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            type: this.props.activity.type
        }
    }
    
    completeActivity = () => {
        this.setState(prevState => ({complete: !prevState.complete}));
    }

    renderOptions = () => {
        return (
            this.props.activity.options.map((option, index) => (
                <Option key={`${this.props.activity.name}-option-${index}`} text={option} />
            ))
        )
    }

    render() {
        console.log(this.props.activity.type === 'Question');
        return (
            <div className='activity'>
                <p>{this.props.activity.content}</p>
                <p>{`status: ${this.state.complete}`}</p>
                <button onClick={this.completeActivity}>Mark as Complete</button>
                {this.state.type === 'Question' ? 
                    <React.Fragment>
                        {this.renderOptions()}
                    </React.Fragment>
                     :
                    <p>Not a question</p>
                }
            </div>
        )
    }
}

function Section ({match}) {
    const program = programs.find(({name}) => name.toLowerCase() === match.params.programName.replace(/-/g, ' '));
    const section = program.sections.find(({name}) => name.toLowerCase() === match.params.sectionName.replace(/-/g, ' '));
    let activities = section.activities.map((activity, index) => (
        <Activity key={`${section.name}-activity-${index}`} activity={activity} />
    ));
    return (
        <React.Fragment>
            {  section ?  
                 <React.Fragment>
                     <h1>{section.name}</h1> 
                     {activities}
                     <Link to={`/programs`}>Back to section</Link>
                </React.Fragment>
                :
                <FourZeroFour />
            }
        </React.Fragment>
    )
}

export default Section;
