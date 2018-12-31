import * as ConsActions from './cons.actions';
import { ICon } from '../../interfaces/cons.interface';

export interface State {
    list: ICon[];
    selectedCon: ICon;
    selectedId: number;
    selectedIndex: number;
}

export const initialState: State = {
    list: null,
    selectedCon: null,
    selectedId: null,
    selectedIndex: null
}

export function reducer(state: State = initialState, action: ConsActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {
        case ConsActions.GetConsSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        case ConsActions.CreateConSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        case ConsActions.UpdateConSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        case ConsActions.SelectCon.Type: {
            let selectedIndex: number = null;
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id === action.conIndex) {
                    selectedIndex = i;
                    break;
                }
            }
            return { ...state, ...{ selectedCon: state.list[selectedIndex], selectedId: action.conIndex, selectedIndex: selectedIndex } }
        }

        case ConsActions.ClearSelectedCon.Type: {
            return { ...state, ...{ selectedCon: null, selectedId: null, selectedIndex: null } }
        }

        case ConsActions.RefreshConsSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        case ConsActions.DeleteConSuccess.Type: {
            return { ...state, ...{ list: action.response.list } }
        }

        default: {
            return state;
        }
    }
}