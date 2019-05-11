import { Action } from '@ngrx/store';
import { IGuest } from '../../interfaces/guests.interface';

export class ActionFactory {
    public getGuestList(): GetGuestList {
        return new GetGuestList();
    }

    public selectGuest(guestId: number): SelectGuest {
        return new SelectGuest(guestId);
    }

    public clearSelectedGuest(): ClearSelectedGuest {
        return new ClearSelectedGuest();
    }

    public createGuest(guest: IGuest): CreateGuest {
        return new CreateGuest(guest);
    }

}

export class InternalActionFactory {
    public getGuestListSuccess(response: IGuest[]): GetGuestListSuccess {
        return new GetGuestListSuccess(response);
    }

    public createGuestSuccess(response: IGuest[]): CreateGuestSuccess {
        return new CreateGuestSuccess(response);
    }

}

export class GetGuestList implements Action {
    public static readonly Type = '[Guests] Get Guest List';
    public readonly type = GetGuestList.Type;
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

export class CreateGuest implements Action {
    public static readonly Type = '[Guests] Create Guest';
    public readonly type = CreateGuest.Type;
    constructor(public readonly guest) { }
}

export class CreateGuestSuccess implements Action {
    public static readonly Type = '[Guests] Create Guest Success';
    public readonly type = CreateGuestSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetGuestList | GetGuestListSuccess | SelectGuest | ClearSelectedGuest | CreateGuest | CreateGuestSuccess;
