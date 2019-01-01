import * as GuestsActions from './guests.actions';
import { IGuest } from '../../interfaces/guests.interface';

export interface State {
    guestList: IGuest[];
    selectedGuest: IGuest;
}

export const initialState: State = {
    guestList: null,
    selectedGuest: null
}

export function reducer(state: State = initialState, action: GuestsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        case GuestsActions.GetGuestListSuccess.Type: {
            return { ...state, ...{ guestList: action.response } }
        }

        default: {
            return state;
        }
    }
}