import * as GuestsActions from './guests.actions';
import { IGuest } from '../../interfaces/guests.interface';

export interface State {
    guestList: IGuest[];
    selectedGuest: IGuest;
    selectedId: number;
    selectedIndex: number;
}

export const initialState: State = {
    guestList: null,
    selectedGuest: null,
    selectedId: null,
    selectedIndex: null
}

export function reducer(state: State = initialState, action: GuestsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        case GuestsActions.GetGuestListSuccess.Type: {
            return { ...state, ...{ guestList: action.response } }
        }

        case GuestsActions.SelectGuest.Type: {
            let selectedIndex: number = null;
            for (let i = 0; i < state.guestList.length; i++) {
                if (state.guestList[i].id === action.guestId) {
                    selectedIndex = i;
                    break;
                }
            }
            return { ...state, ...{ selectedGueset: state.guestList[selectedIndex], selectedId: action.guestId, selectedIndex: selectedIndex } }
        }

        case GuestsActions.ClearSelectedGuest.Type: {
            return { ...state, ...{ selectedGuest: null, selectedId: null, selectedIndex: null } }
        }

        case GuestsActions.CreateGuestSuccess.Type: {
            return { ...state, ...{ guestList: action.response } }
        }

        default: {
            return state;
        }
    }
}