import React from 'react';

const SectionCard = (props) => {
    return (
        <a href={`/`} className='section-card'>
            <div className='section'>
                <img src={props.section.image} className='section-image' alt={`${props.section.name} overview image.`} />
                <h3 className='section__order'>{`Part ${props.section.order}`}</h3>
                <h4 className='section__name'>{props.section.name}</h4>
            </div>
        </a>
    )
}

export default SectionCard;