import React from 'react';
import { Link, Route } from 'react-router-dom';
// import ProgramPane from './ProgramPane';
import ModalLink from '../ModalLink';
import Program from '../Program/index';
import SectionCard from '../SectionCard';

// redux
import { connect } from 'react-redux';
import { completeAction } from '../../redux/actions';

const mapStateToProps = state => {
    return { programs: state.programs };
}

const ProgramOverview = ({ programs, match }) => {
    return (
        <section className='program-overview'>
            {programs.map((program, index) => (
                <article key={`program-overview-${index}`}className='program-panel'>
                    <header className='program-panel-header'>
                        <h2 className='program-name'><Link to={`/programs/${index}`}>{program.name}</Link></h2>
                        <ModalLink text={`Learn More`} modalText={program.description} />
                    </header>
                    <ul className='program-panel-sections'>
                        {program.sections.map((section) => (
                            <li key={`program-section-${section.name.replace(/\s/g, '-')}`} className='program-section-item'>
                                <Link className='program-section-card-link' to={`/programs/${index}/sections/${section.order}`}>
                                    <SectionCard programIndex={index} section={section} status={programs[index].sections[section.order].isComplete} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}

export default connect(mapStateToProps, null)(ProgramOverview);