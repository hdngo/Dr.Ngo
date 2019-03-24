import React from 'react';
import { Link } from 'react-router-dom';

const SectionCard = (props) => {
    return (
        <Link to={`/${props.program.name.trim().replace(/\s/g, '-')}/section/${props.section.order + 1}`} className='section-card'>
            <div className='section'>
                <img src={props.section.image} className='section-image' alt={`${props.section.name} overview image.`} />
                <h3 className='section__order'>{`Part ${props.section.order + 1}`}</h3>
                <h4 className='section__name'>{props.section.name}</h4>
            </div>
        </Link>
    )
}

export default SectionCard;