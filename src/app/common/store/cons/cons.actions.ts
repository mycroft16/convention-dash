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

    public updateCon(con: ICon): UpdateCon {
        return new UpdateCon(con);
    }

    public clearSelectedCon(): ClearSelectedCon {
        return new ClearSelectedCon();
    }

    public deleteCon(conId: number): DeleteCon {
        return new DeleteCon(conId);
    }
}

export class InternalActionFactory {
    public getConsSuccess(response: ICon[]): GetConsSuccess {
        return new GetConsSuccess(response);
    }

    public createConSuccess(response: ICon[]): CreateConSuccess {
        return new CreateConSuccess(response);
    }

    public updateConSuccess(response: ICon[]): UpdateConSuccess {
        return new UpdateConSuccess(response);
    }

    public refreshCons(): RefreshCons {
        return new RefreshCons();
    }

    public refreshConsSuccess(response: ICon[]): RefreshConsSuccess {
        return new RefreshConsSuccess(response);
    }

    public deleteConSuccess(response: ICon[]): DeleteConSuccess {
        return new DeleteConSuccess(response);
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

export class UpdateCon implements Action {
    public static readonly Type = '[Cons] Update Con';
    public readonly type = UpdateCon.Type;
    constructor(public readonly con) { }
}

export class UpdateConSuccess implements Action {
    public static readonly Type = '[Cons] Update Con Success';
    public readonly type = UpdateConSuccess.Type;
    constructor(public readonly response) { }
}

export class ClearSelectedCon implements Action {
    public static readonly Type = '[Cons] Clear Selected Con';
    public readonly type = ClearSelectedCon.Type;
}

export class RefreshCons implements Action {
    public static readonly Type = '[Cons] Refresh Cons';
    public readonly type = RefreshCons.Type;
}

export class RefreshConsSuccess implements Action {
    public static readonly Type = '[Cons] Refresh Cons Success';
    public readonly type = RefreshConsSuccess.Type;
    constructor(public readonly response) { }
}

export class DeleteCon implements Action {
    public static readonly Type = '[Cons] Delete Con';
    public readonly type = DeleteCon.Type;
    constructor(public readonly conId) { }
}

export class DeleteConSuccess implements Action {
    public static readonly Type = '[Cons] Delete Con Success';
    public readonly type = DeleteConSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetCons | GetConsSuccess | CreateCon | CreateConSuccess | UpdateCon | UpdateConSuccess | ClearSelectedCon | RefreshCons | RefreshConsSuccess | DeleteCon | DeleteConSuccess;
