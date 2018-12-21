import { Action } from '@ngrx/store';
import { IDropdown } from '../../interfaces/dropdowns.interface';

export class ActionFactory {
    public getDropdownData(): GetDropdownData {
        return new GetDropdownData();
    }
}

export class InternalActionFactory {
    public getDropdownDataSuccess(response: IDropdown): GetDropdownDataSuccess {
        return new GetDropdownDataSuccess(response);
    }
}

export class GetDropdownData implements Action {
    public static readonly Type = '[Dropdowns] Get Dropdown Data';
    public readonly type = GetDropdownData.Type;
}

export class GetDropdownDataSuccess implements Action {
    public static readonly Type = '[Dropdowns] Get Dropdown Data Success';
    public readonly type = GetDropdownDataSuccess.Type;
    constructor(public readonly response) { }
}

export type Any = GetDropdownData | GetDropdownDataSuccess;