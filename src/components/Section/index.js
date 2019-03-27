import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Activities from '../Section/activities';
import FourZeroFour from '../FourZeroFour';

const mapStateToProps = state => {
    return {
        programs: state.programs,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        completeAction: (programId, sectionId, activityId, activityType, optionId = null) => {
            const payload = {
                programId: programId,
                sectionId: sectionId,
                activityId: activityId,
                activityType: activityType,
                optionId: optionId
            }
            dispatch({
                type: 'COMPLETE_ACTIVITY',
                payload: payload
            })
        }
    }
}

function Section ({programs, match, completeAction}) {
    const programId = match.params.programId;
    const program = programs[programId];
    const sectionId = match.params.sectionId;
    const section = program.sections[sectionId]
    let props = {programId: programId, sectionId: sectionId, programs: programs, completeAction: completeAction};
    return (
        <React.Fragment>
            {  section ?
                <section className='section'>
                    <h1 className='section__name'>{section.name}</h1>
                    <p className='section__description'>{section.description}</p>
                    <img className='section__image' src={`${section.image}`} alt={`illustrating ${section.name}`} />
                    <Activities {...props} />
                </section>
                :
                <FourZeroFour />
            }

        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
