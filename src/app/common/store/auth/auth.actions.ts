import { Action } from '@ngrx/store';

export class ActionFactory {
    public getAuthToken(): GetAuthToken {
        return new GetAuthToken();
    }

    public getLoginToken(username: string, password: string): GetLoginToken {
        return new GetLoginToken(username, password);
    }

    public setLoginToken(token: string): SetLoginToken {
        return new SetLoginToken(token);
    }
}

export class InternalActionFactory {
    public getAuthTokenSuccess(response: string): GetAuthTokenSuccess {
        return new GetAuthTokenSuccess(response);
    }

    public getLoginTokenSuccess(response: string): GetLoginTokenSuccess {
        return new GetLoginTokenSuccess(response);
    }
}

export class GetAuthToken implements Action {
    public static readonly Type = '[Auth] Get Auth Token';
    public readonly type = GetAuthToken.Type;
}

export class GetAuthTokenSuccess implements Action {
    public static readonly Type = '[Auth] Get Auth Token Success';
    public readonly type = GetAuthTokenSuccess.Type;
    constructor(public readonly response) { }
}

export class GetLoginToken implements Action {
    public static readonly Type = '[Login] Get Login Token';
    public readonly type = GetLoginToken.Type;
    constructor(public readonly username, public readonly password) { }
}

export class GetLoginTokenSuccess implements Action {
    public static readonly Type = '[Login] Get Login Token Success';
    public readonly type = GetLoginTokenSuccess.Type;
    constructor(public readonly response) { }
}

export class SetLoginToken implements Action {
    public static readonly Type = '[Login] Set Login Token';
    public readonly type = SetLoginToken.Type;
    constructor(public readonly token) { }
}

export type Any = GetAuthToken | GetAuthTokenSuccess | GetLoginToken | GetLoginTokenSuccess | SetLoginToken;