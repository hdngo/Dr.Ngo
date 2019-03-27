import React, { Component } from 'react';
// import { connect } from 'react-redux';
// const mapStateToProps = state => {
//     return {
//         programs: state.programs,
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         completeAction: (programId, sectionId, activityId, activityType, optionId = null) => {
//             const payload = {
//                 programId: programId,
//                 sectionId: sectionId,
//                 activityId: activityId,
//                 activityType: activityType,
//                 optionId: optionId
//             }
//             dispatch({
//                 type: 'COMPLETE_ACTIVITY',
//                 payload: payload
//             })
//         }
//     }
// }
function Activity (props) {
    const isQuestion = props.activity.type === "Question" ? true : false;
    console.log(props.programs);
    return (
        <div className={`activity ${props.active ? 'activity--active': 'activity--hidden'}`}>
            <div className={`activity__content ${props.activity.type === 'Question' ? 'activity--prompt' : 'activity--text'}`}>
                {isQuestion ?
                    <React.Fragment>
                        <p className='activity__prompt'>{props.activity.prompt}</p>
                        <ul className='prompt-options'>
                            {props.activity.options.map((option, index ) => (
                                <li 
                                    key={`program-${props.programId}-section-${props.sectionId}-activity-${props.activityIndex}-option-${index}`}
                                    className={`prompt-option ${props.programs[props.programId].sections[props.sectionId].activities[props.activityIndex].selectedOption === index ? 'prompt-option-selected' : 'prompt-option-unselected'}`}
                                    onClick={props.completeAction.bind(this, props.programId, props.sectionId, props.activityIndex, props.activity.type, index)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul> 
                    </React.Fragment>
                :
                    props.activity.content.split('\n').map((i, key) => {
                        return <div className='activity__content__line' key={key}>{i}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Activity;