import { Action } from '@ngrx/store';
import { IGuest } from '../../interfaces/guests.interface';

export class ActionFactory {
    public getGuestList(conId: number): GetGuestList {
        return new GetGuestList(conId);
    }

}

export class InternalActionFactory {
    public getGuestListSuccess(response: IGuest[]): GetGuestListSuccess {
        return new GetGuestListSuccess(response);
    }

}

export class GetGuestList implements Action {
    public static readonly Type = '[Guests] Get Guest List';
    public readonly type = GetGuestList.Type;
    constructor(public readonly conId) { }
}

export class GetGuestListSuccess implements Action {
    public static readonly Type = '[Cons] Get Guest List Success';
    public readonly type = GetGuestListSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetGuestList | GetGuestListSuccess;
