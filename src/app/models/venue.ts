export enum City {
    Spb = 1,
    Msk = 2,
    Sar = 3,
    Kry = 4,
    Kzn = 5,
    Nsk = 6,
    Nnv = 7,
    Ufa = 8,
}

export interface IVenue {
    id: string;
    city: City;
    name: string;
    address: string;
    mapUrl: string;
}
