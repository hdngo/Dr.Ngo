import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Activity from './activity';
import FooterNav from './FooterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivityIndex: 0,
            activityCount: this.props.programs[this.props.programId].sections[this.props.sectionId].activities.length,
        }
    }

    componentDidMount = () => {
        const firstActivity = this.props.programs[this.props.programId].sections[this.props.sectionId].activities[0];
        this.props.completeAction(this.props.programId, this.props.sectionId, 0, firstActivity.type, null)
    }

    handlePrevActivity = () => {
        if(this.state.currentActivityIndex === 0) {
            return;
        }
        this.setState({currentActivityIndex: this.state.currentActivityIndex - 1})
    }

    handleNextActivity = () => {
        if(this.state.currentActivityIndex === this.state.activityCount - 1) {
            return;
        }
        const nextActivity = this.props.programs[this.props.programId].sections[this.props.sectionId].activities[this.state.currentActivityIndex + 1];
        let optionValue = null;
        if(nextActivity.type === 'Question') {
            optionValue = nextActivity.selectedOption;
        }
        this.props.completeAction(this.props.programId, this.props.sectionId, this.state.currentActivityIndex + 1, nextActivity.type, optionValue)
        this.setState({currentActivityIndex: this.state.currentActivityIndex +1});
    }

    handleFinishActivity = () => {
        this.setState({currentyActivityIndex: 0});
    }

    handleNavigation = () => {
        this.setState({currentActivityIndex: 0});
    }
    
    render() {
        const currentActivity = this.props.programs[this.props.programId].sections[this.props.sectionId].activities[this.state.currentActivityIndex];
        return (
            <React.Fragment>
                <div className='activities'>
                    <div className='activity-nav'>
                        <button className={`activity-prev ${this.state.currentActivityIndex === 0 ? 'hidden' : ''}`} onClick={this.handlePrevActivity}><FontAwesomeIcon icon='chevron-left' /></button>
                        <button className={`activity-next ${this.state.currentActivityIndex === this.state.activityCount - 1 ? 'hidden' : ''}`}  disabled={currentActivity.type === 'Question' && !currentActivity.isComplete} onClick={this.handleNextActivity}><FontAwesomeIcon icon='chevron-right' /></button>
                        {/* finish link should be visible if complete */}
                        <Link to={`/programs/${this.props.programId}`} className={`activity-finish ${(currentActivity.isComplete) && (this.state.currentActivityIndex === this.state.activityCount - 1) ? '' : 'hidden'}`} onClick={this.handleFinishActivity}>Exit</Link>
                    </div>
                    {this.props.programs[this.props.programId].sections[this.props.sectionId].activities.map((activity, index) => (
                        <Activity key={`section-${this.props.sectionId}-activity-${index}`} active={this.state.currentActivityIndex === index} {...this.props} activity={activity} activityIndex={index}/>
                    ))}
                </div>
                <FooterNav {...this.props} handleNavigation={this.handleNavigation} />
            </React.Fragment>
        )
    }
}

export default Activities;

/* I chose to make this component a class based one because I didn't feel as though the whole App needed to know about the 'current activity' state.
This would change however if there was a requirement to allow the user to say, pick up from where he/she previously left off within a section, but I thought that
it would lead to some definite scope creep granted there could be way more advanced navigational functionality. Ideally, I would have liked to make both nav components reusable but ran out of time. */