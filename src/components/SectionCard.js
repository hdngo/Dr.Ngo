import React from 'react';

function SectionCard (props) {
    return (
        <div className='section'>
            <img src={props.section.image} className='section-image' alt={`${props.section.name.toLowerCase().replace(/\s/g, '-')} overview image.`} />
            <h3 className='section__order'>{`Part ${props.section.order + 1}`}</h3>
            <h4 className='section__name'>{props.section.name}</h4>
        </div>
    )
}

export default SectionCard;