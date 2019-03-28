const programsData = require('../../program.json');
const programs = Object.values(programsData.programs);
import { COMPLETE_ACTIVITY } from './constants';
import update from 'immutability-helper';

/* Note: Ideally, I would have liked to normalize the data as the Redux docs 
stressed the 'importance' of having normalized data for easier state updates and performance.
I eventually decided to hold off on normalizing the data because I was definitely bottlenecking on figuring out
figuring out the ideal data format could be.*/
const initialState = {
    programs: programs.map((program)=>{
        return {
            ...program, 
            isComplete: false,
            sections: program.sections.map((section) => { 
                return {
                    ...section,
                    isComplete: false,
                    activities: section.activities.map((activity) => {
                        return {
                            ...activity,
                            isComplete: false,
                            selectedOption: null
                        }
                    })
                }
            }),
        }
    })
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'COMPLETE_ACTIVITY':
            const selectActivity = state.programs[action.payload.programId].sections[action.payload.sectionId].activities[action.payload.activityId];
            const prevSelectActivityState = state.programs[action.payload.programId].sections[action.payload.sectionId].activities[action.payload.activityId]
            let newState;
            if(selectActivity.type === 'Question') {
                if(prevSelectActivityState.selectedOption === action.payload.optionId) {
                    /* Do nothing for question activities if the selected option is the same as the currently selected option */
                    return state;
                }
                else {
                    /* Update question activities */
                    newState = update(state.programs, {[action.payload.programId]: {['sections']: {[action.payload.sectionId]: {['activities']: {[action.payload.activityId]: {['isComplete']: {$set: true}}}}}}}); 
                    newState = update(newState, {[action.payload.programId]: {['sections']: {[action.payload.sectionId]: {['activities']: {[action.payload.activityId]: {['selectedOption']: {$set: action.payload.optionId}}}}}}});
                }
            }
            else {
                /* Update text activities */
                newState = update(state.programs, {[action.payload.programId]: {['sections']: {[action.payload.sectionId]: {['activities']: {[action.payload.activityId]: {['isComplete']: {$set: true}}}}}}}); 
            }
            /* Update section */
            const isSectionComplete = newState[action.payload.programId].sections[action.payload.sectionId].activities.every((activity) => activity.isComplete === true);
            if (isSectionComplete) {
                newState = update(newState, {[action.payload.programId]: {['sections']: {[action.payload.sectionId]: {['isComplete']: {$set: true}}}}}); 
            }
            const isProgramComplete = newState[action.payload.programId].sections.every((section) => section.isComplete === true);
            if (isProgramComplete) {
                newState = update(newState, {[action.payload.programId]: {['isComplete']: {$set: true}}}); 
            }
            /* Update program */
            return { programs: newState };
        default: return state;
    }
};

export default rootReducer;