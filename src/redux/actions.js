import { COMPLETE_ACTIVITY} from './constants';

export function completeActivity(payload) {
    return { type: COMPLETE_ACTIVITY, payload }
};