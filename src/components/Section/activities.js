import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Activity from './activity';
import FooterNav from './FooterNav';

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
        console.log(this.props.programs);
        return (
            <React.Fragment>
                <div className='activities'>
                    <div className='activity-nav'>
                        <button className={`activity-prev ${this.state.currentActivityIndex === 0 ? 'hidden' : ''}`} onClick={this.handlePrevActivity}>Previous</button>
                        <button className={`activity-next ${this.state.currentActivityIndex === this.state.activityCount - 1 ? 'hidden' : ''}`}  disabled={currentActivity.type === 'Question' && !currentActivity.isComplete} onClick={this.handleNextActivity}>Next</button>
                        <Link to={`/programs/${this.props.programId}`} className={`activity-finish ${currentActivity.isComplete && this.state.currentActivityIndex === this.state.activityCount - 1 ? '' : 'hidden'}`} onClick={this.handleFinishActivity}>Finish</Link>
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