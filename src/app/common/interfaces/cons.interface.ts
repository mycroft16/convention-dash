export interface ICon {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    status: string;
    days?: IDay[];
    startDisplay?: string;
    endDisplay?: string;
    statusString?: "Planning" | "Active";
}

export interface IDay {
    date: string;
    display: string;
}