// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProgramPane from './ProgramPane';

// const programsData = require('../../program.json');
// const programs = Object.values(programsData.programs);

// function Program ({match}) {
//     const program = programs.find(({name}) => name.toLowerCase() === match.params.programName.toLowerCase().replace(/-/g, ' '));
//     return (
//         <React.Fragment>
//             { program ? 
//                 <ProgramPane match={match} program={program} showDescription={true} />
//                 :
//                 <FourZeroFour />
//             }
//         </React.Fragment>
//     )
// }

// export default Program;