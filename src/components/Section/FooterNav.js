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