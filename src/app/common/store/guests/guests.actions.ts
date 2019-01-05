import { Action } from '@ngrx/store';
import { IGuest } from '../../interfaces/guests.interface';

export class ActionFactory {
    public getGuestList(conId: number): GetGuestList {
        return new GetGuestList(conId);
    }

    public selectGuest(guestId: number): SelectGuest {
        return new SelectGuest(guestId);
    }

    public clearSelectedGuest(): ClearSelectedGuest {
        return new ClearSelectedGuest();
    }

}

export class InternalActionFactory {
    public getGuestListInternal(conId: number): GetGuestListInternal {
        return new GetGuestListInternal(conId);
    }

    public getGuestListSuccess(response: IGuest[]): GetGuestListSuccess {
        return new GetGuestListSuccess(response);
    }

}

export class GetGuestList implements Action {
    public static readonly Type = '[Guests] Get Guest List';
    public readonly type = GetGuestList.Type;
    constructor(public readonly conId) { }
}

export class GetGuestListInternal implements Action {
    public static readonly Type = '[Guests] Get Guest List Internal';
    public readonly type = GetGuestListInternal.Type;
    constructor(public readonly conId) { }
}

export class GetGuestListSuccess implements Action {
    public static readonly Type = '[Guests] Get Guest List Success';
    public readonly type = GetGuestListSuccess.Type;
    constructor(public readonly response) { }
}

export class SelectGuest implements Action {
    public static readonly Type = '[Guests] Select Gueset';
    public readonly type = SelectGuest.Type;
    constructor(public readonly guestId) { }
}

export class ClearSelectedGuest implements Action {
    public static readonly Type = '[Guests] Clear Selected Guest';
    public readonly type = ClearSelectedGuest.Type;
}

export type Any = GetGuestList | GetGuestListInternal | GetGuestListSuccess | SelectGuest | ClearSelectedGuest;
