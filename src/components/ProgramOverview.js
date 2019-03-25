import React from 'react';
import { Link } from 'react-router-dom';
import ModalLink from './ModalLink';
import ProgramPane from './ProgramPane';
import SectionCard from './SectionCard';

const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);

function ProgramOverview ({match}) {
    return (
        <React.Fragment>
            {programs.map((program, index) => (
                <ProgramPane key={`program-pane-${index}`} match={match} program={program} showDescription={false} />
            ))}
        </React.Fragment>
    )
}
export default ProgramOverview;