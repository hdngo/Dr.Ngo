import React from 'react';
import { Link } from 'react-router-dom';

function FooterNav (props) {
    const section = props.programs[props.programId].sections[props.sectionId];
    let sectionIdAsInteger = parseInt(props.sectionId);
    let backLocation, nextLocation;
    backLocation = sectionIdAsInteger === 0 ? `/` : `/programs/${props.programId}/sections/${sectionIdAsInteger - 1}`;
    nextLocation = sectionIdAsInteger === (props.programs[props.programId].sections.length - 1 ) ? `/` : `/programs/${props.programId}/sections/${sectionIdAsInteger + 1}`;
    return (
        <nav className='section-nav'>
            <Link to={backLocation} onClick={props.handleNavigation} className='button link-back'>Back</Link>
            <Link to={nextLocation} onClick={props.handleNavigation} className='button link-next'>Continue</Link>
        </nav>
    )
}

export default FooterNav;

/* Ideally this would be a reusable component for all navigation, but like I mentioned in another comment, I was worried about scope creep, though I thought it would be useful to
allow users to more easily navigate between sections while keeping the previous activity viewed in mind for starters. It would 'definitely' warrant a need for global state. */