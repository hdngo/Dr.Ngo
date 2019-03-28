import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Activities from '../Section/activities';
import FourZeroFour from '../FourZeroFour';
import { connect } from 'react-redux';

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
                    <h1 className='section__name'>{`Part ${section.order + 1}: ${section.name}`}</h1>
                    <div className='section__overview'>
                        <p className='section__description'>{section.description}</p>
                        <img className='section__image' src={`${section.image}`} alt={`illustrating ${section.name}`} />
                    </div>
                    <Activities {...props} />
                    <Link to={`/programs/${programId}`} className='link link--overview'>{`Back to ${program.name.toString().replace(/\s/g, ' ')}`}</Link>
                </section>
                :
                <FourZeroFour />
            }

        </React.Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Section);
