import React from 'react';
import { Link, Route } from 'react-router-dom';
import ModalLink from '../ModalLink';
import Program from '../Program/index';
import SectionCard from '../SectionCard';
import { connect } from 'react-redux';
import { completeAction } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = state => {
    return { programs: state.programs };
}

const ProgramOverview = ({ programs, match }) => {
    return (
        <section className='program-overview'>
            <h1>Program Overview</h1>
            {programs.map((program, index) => (
                <article key={`program-overview-${index}`}className='program-panel'>
                    <header className='program-panel-header'>
                        <h2 className='program-name'><Link className='program-name-link' to={`/programs/${index}`}>{program.name} {program.isComplete ? <FontAwesomeIcon icon='check-square' />: null}</Link></h2>
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

/* Ideally I would have liked to figure a better dom structure so that I could reuse the Program component and potentially other nested components on this page.
The assumption that I originally drew from the requirements was that a user should be able to navigate from 
the home page (overview) to a section, and that there wasn't an explicit program page. As it is currently, I don't see the value in 
having a program page granted the UI is similar to what I'm showing for a program on the home page (redundant UI imo), but I do see the value in 
allowing the user to go back for easier scroll/navigation purposes. */