import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SectionCard ({ programIndex, section, status }) {
    return (
        <div className='section-card'>
            { status && 
                <div className={`section-card-checkbox`}><FontAwesomeIcon icon='check-square' /></div>
            }
            <img src={section.image} className='section-card-image' alt={`${section.name.toLowerCase().replace(/\s/g, '-')} overview image.`} />
            <h3 className='section-card__order'>{`Part ${section.order + 1}`}</h3>
            <h4 className='section-card__name'>{section.name}</h4>
        </div>
    )
}

export default SectionCard;

/* Ideally I would've liked to make this component more robust so that I could pass in props to configure styling and such based on the page used for rendering.
Given more time, I would've liked to potentially implement lazy loading and fallbacks for the image. */