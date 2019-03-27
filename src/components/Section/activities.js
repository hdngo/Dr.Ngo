import React, { Component } from 'react';
import Activity from './activity';

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivityIndex: 0,
            activityCount: this.props.programs[this.props.programId].sections[this.props.sectionId].activities.length,
            nextActivity: null,
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
            this.setState({nextActivity: null});
            return;
        }
        const nextActivity = this.state.nextActivity ? this.state.nextActivity : this.props.programs[this.props.programId].sections[this.props.sectionId].activities[this.state.currentActivityIndex + 1];
        this.props.completeAction(this.props.programId, this.props.sectionId, this.state.currentActivityIndex + 1, nextActivity.type, null)
        this.setState({currentActivityIndex: this.state.currentActivityIndex +1, nextActivity: nextActivity });
    }
    render() {
        const currentActivityState = this.props.programs[this.props.programId].sections[this.props.sectionId].activities[this.state.currentActivityIndex];
        return (
            <React.Fragment>
                <div className='activities'>
                    {this.props.programs[this.props.programId].sections[this.props.sectionId].activities.map((activity, index) => (
                        <Activity key={`section-${this.props.sectionId}-activity-${index}`} active={this.state.currentActivityIndex === index} {...this.props} activity={activity} activityIndex={index}/>
                    ))}
                </div>
                <div className='activity-nav'>
                    <button className={`activity-prev ${this.state.currentActivityIndex === 0 ? 'hidden' : ''}`} onClick={this.handlePrevActivity}>Previous Activity</button>
                    <button className={`activity-next ${this.state.currentActivityIndex === this.state.activityCount - 1 ? 'hidden' : ''}`}  disabled={currentActivityState.type === 'Question' && !currentActivityState.isComplete}onClick={this.handleNextActivity}>Next Activity</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Activities;