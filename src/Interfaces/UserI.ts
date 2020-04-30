/**
 * Описание идентификаторов и связей пользователя
 */
export interface UserIDs{
    id_user?:number;
    login?:string;
    name?:string;
    email?:string;
    phone?: string;
    token?:string;
}


/**
 * Описание полей пользователя
 */
export interface UserI{
    id?:number;
    id_user?:number;
    login?:string;
    name?:string;
    surname?: string;
    patronymic?: string;
    email?:string;
    phone?: string;
    pswd?: string;
    hash?: string;
}
