import React, { Component } from 'react';
import ModalLink from './ModalLink';
import SectionCard from './SectionCard';
import Section from './Section';
import { Link } from 'react-router-dom';

function ProgramPane ({match, ...props}) {
    return(
        <div className='program-pane'>
            <div className='program-pane-header'>
                <h2 className='program-name'>{props.program.name}</h2>
                {props.showDescription ? 
                    <section className='program-description'>{props.program.description}</section>                
                : 
                    <ModalLink text={'Learn More'} modalText={props.program.description} />
                }

            </div>
            <ul className='program-sections'>
                {props.program.sections.map(section => (
                    <li key={`${props.program.name}-section-${section.order}`} className='program-section'>
                        <Link to={`${match.url}/${props.program.name.toLowerCase().replace(/\s/g, '-')}/sections/${section.name.toLowerCase().replace(/\s/g, '-')}`} className='section-card'>
                            <SectionCard program={props.program} section={section} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ProgramPane;