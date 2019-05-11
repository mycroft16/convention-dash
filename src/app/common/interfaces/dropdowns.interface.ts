export interface IDropdown {
    eventTypes: IEventType[],
    fandoms: IFandom[]
}

export interface IEventType {
    id: number;
    typeName: string
}

export interface IFandom {
    id: number;
    fandomName: string;
}