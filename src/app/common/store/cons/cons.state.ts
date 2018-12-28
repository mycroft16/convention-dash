import * as ConsActions from './cons.actions';
import { ICon } from '../../interfaces/cons.interface';

export interface State {
    list: ICon[];
    selectedCon: ICon;
}

export const initialState: State = {
    list: null,
    selectedCon: null
}

export function reducer(state: State = initialState, action: ConsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        case ConsActions.GetConsSuccess.Type: {
            return { ...state, ...{ list: action.response.list, selectedCon: action.response.list[0] } }
        }

        case ConsActions.CreateConSuccess.Type: {
            return { ...state, ...{ list: action.response.list, selectedCon: action.response.list[action.response.selectedCon] } }
        }

        case ConsActions.SelectCon.Type: {
            return { ...state, ...{ selectedCon: state.list[action.conIndex] } }
        }

        case ConsActions.ClearSelectedCon.Type: {
            return { ...state, ...{ selectedCon: null } }
        }

        case ConsActions.RefreshConsSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        default: {
            return state;
        }
    }
}