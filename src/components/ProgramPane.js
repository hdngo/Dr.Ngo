import React, { Component } from 'react';
import ModalLink from './ModalLink';
import SectionCard from './SectionCard';

class ProgramPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    renderSectionCards = () => {
        return (
            this.props.program.sections.map(section => (
                <li key={`${this.props.program.name}-section-${section.order}`} className='program-section'>
                    <SectionCard section={section} />
                </li>
            ))
        )
    }

    renderProgramPaneHeader = () => {
        return (
            <div className='program-pane-header'>
                <h2 className='program-name'>{this.props.program.name}</h2>
                <ModalLink text={'Learn More'} modalText={this.props.program.description} />
            </div>
        )
    }

    render() {
        return (
            <div className='program-pane'>
                {this.renderProgramPaneHeader()}
                <ul className='program-sections'>
                    {this.renderSectionCards()}
                </ul>
            </div>
        )
    }
}

export default ProgramPane;