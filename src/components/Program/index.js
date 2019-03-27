import React from 'react';
import { Link } from 'react-router-dom';
import ModalLink from '../ModalLink';
// import ProgramPane from './ProgramPane';
import SectionCard from '../SectionCard';

import { connect } from 'react-redux';
const mapStateToProps = state => {
    return { 
        programs: state.programs,
    };
}

function Program ({ match, programs }) {
    const programId = match.params.programId;
    const program = programs[match.params.programId];
    const hasSections = program.sections.count > 0;
    const sections = program.sections.map((section) => (
        <li key={`program-section-${section.name.replace(/\s/g, '-')}`} className='program-section-item'>
            <Link className='program-section-card-link' to={`${match.url}/sections/${section.order}`}>
                <SectionCard programIndex={programId} section={section} status={programs[programId].sections[section.order].isComplete} />
            </Link>
        </li>
    ));
    return (
        <React.Fragment>
            { program && 
                <article className='program-panel'>
                    <header className='program-panel-header'>
                        <h2 className='program-name'>{program.name}</h2>
                        <ModalLink text={`Learn More`} modalText={program.description} />
                    </header>
                    <ul className='program-panel-sections'>
                        {sections}
                    </ul>
                </article>
            }
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(Program);