export interface IGuest {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    category: string;
    faceShot: string;
    billBoard: string;
    sizzleReel: string;
    bio: string;
    doesPhotoOp: boolean;
    pricePhotoOp: number;
    doesAutograph: boolean;
    priceAutograph: number;
    doesSelfie: boolean;
    priceSelfie: number;
    status: string;
    previousCons: IPreviousCon[];
    schedule: IGuestSchedule[];
}

export interface IPreviousCon {
    name: string;
    dates: string;
}

export interface IGuestSchedule {
    id: number;
}