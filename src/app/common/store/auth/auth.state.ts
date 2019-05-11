import * as AuthActions from './auth.actions';

export interface State {
    authToken: string;
}

export const initialState: State = {
    // authToken: null
    authToken: "Bearer MXx8YWRtaW58fDE1NDU5MDg2Nzh8fDE="
}

export function reducer(state: State = initialState, action: AuthActions.Any): State {
    if (state === null) state = initialState;

    switch(action.type) {

        case AuthActions.GetAuthTokenSuccess.Type: {
            return { ...state, ...{ authToken: action.response } }
        }

        case AuthActions.GetLoginTokenSuccess.Type: {
            return { ...state, ...{ authToken: action.response.authToken } }
        }

        case AuthActions.SetLoginToken.Type: {
            return { ...state, ...{ authToken: action.token } }
        }

        case AuthActions.Logout.Type: {
            return { ...state, ...{ authToken: null } }
        }

        default: {
            return state;
        }

    }
}