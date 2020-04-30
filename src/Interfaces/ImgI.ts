/**
 * Картинка
 */
export interface ImgI {
    id?: number;
    file_name: string; // имя файла md5 от исходника
    f_320: string; // x320
    f_800: string;
    f_1024: string;
}