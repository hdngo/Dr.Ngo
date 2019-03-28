import { COMPLETE_ACTIVITY} from './constants';

export function completeActivity(payload) {
    return { type: COMPLETE_ACTIVITY, payload }
};

/* My intent was to import this action function into the components (you may see a few lingering imports),
but I had trouble calling the function from within my components. Ideally I'd like to refactor my components to make use
of the import, but bottlenecked trying to do so and left it as is for the time being. */