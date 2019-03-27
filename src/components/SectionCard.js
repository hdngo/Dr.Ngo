import React from 'react';

function SectionCard ({ programIndex, section, status }) {
    return (
        <div className='program-section-card'>
            <div className={`program-section-card-checkbox`}>{status.toString()}</div>
            <img src={section.image} className='section-image' alt={`${section.name.toLowerCase().replace(/\s/g, '-')} overview image.`} />
            <h3 className='section__order'>{`Part ${section.order + 1}`}</h3>
            <h4 className='section__name'>{section.name}</h4>
        </div>
    )
}

export default SectionCard;