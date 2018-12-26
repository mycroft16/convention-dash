import { Action } from '@ngrx/store';
import { ICon } from '../../interfaces/cons.interface';
import { SelectControlValueAccessor } from '@angular/forms';

export class ActionFactory {
    public getCons(): GetCons {
        return new GetCons();
    }

    public createCon(con: ICon): CreateCon {
        return new CreateCon(con);
    }

    public selectCon(conIndex: number): SelectCon {
        return new SelectCon(conIndex);
    }

    public clearSelectedCon(): ClearSelectedCon {
        return new ClearSelectedCon();
    }
}

export class InternalActionFactory {
    public getConsSuccess(response: ICon): GetConsSuccess {
        return new GetConsSuccess(response);
    }

    public createConSuccess(response: ICon): CreateConSuccess {
        return new CreateConSuccess(response);
    }
}

export class GetCons implements Action {
    public static readonly Type = '[Cons] Get Cons';
    public readonly type = GetCons.Type;
}

export class GetConsSuccess implements Action {
    public static readonly Type = '[Cons] Get Cons Success';
    public readonly type = GetConsSuccess.Type;
    constructor(public readonly response) { }
}

export class CreateCon implements Action {
    public static readonly Type = '[Cons] Create Con';
    public readonly type = CreateCon.Type;
    constructor(public readonly con) { }
}

export class CreateConSuccess implements Action {
    public static readonly Type = '[Cons] Create Con Success';
    public readonly type = CreateConSuccess.Type;
    constructor(public readonly response) { }
}

export class SelectCon implements Action {
    public static readonly Type = '[Cons] Select Con';
    public readonly type = SelectCon.Type;
    constructor(public readonly conIndex) { }
}

export class ClearSelectedCon implements Action {
    public static readonly Type = '[Cons] Clear Selected Con';
    public readonly type = ClearSelectedCon.Type;
}

export type Any = GetCons | GetConsSuccess | CreateCon | CreateConSuccess | SelectCon | ClearSelectedCon;
