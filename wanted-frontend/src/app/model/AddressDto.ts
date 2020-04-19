import * as models from './models';

export interface AddressDto {
    id?: number;

    streetName?: string;

    comments?: string;

    latitude?: number;

    longitude?: number;

    streetNumber?: string;

    department?: string;

    quarterName?: string;

    districtName?: string;

    zipCode?: string;

    floor?: string;

    betweenStreet1?: string;

    betweenStreet2?: string;

}
