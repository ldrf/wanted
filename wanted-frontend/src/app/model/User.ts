import * as models from './models';

export interface User {
    id?: number;

    name?: string;

    lastName?: string;

    email?: string;

    description?: string;

    idFacebook?: string;

    idGoogle?: string;

    isRegister?: boolean;

}
