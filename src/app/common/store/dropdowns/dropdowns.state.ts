import * as DropdownActions from './dropdowns.actions';
import { IEventType, IFandom } from '../../interfaces/dropdowns.interface';

export interface State {
    eventTypes: IEventType[],
    fandoms: IFandom[]
}

export const initialState: State = {
    eventTypes: null,
    fandoms: null
}

export function reducer(state: State = initialState, action: DropdownActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case DropdownActions.GetDropdownDataSuccess.Type: {
            return { ...state, ...{eventTypes: action.response.eventTypes, fandoms: action.response.fandoms } }
        }

        default: {
            return state;
        }

    }
}