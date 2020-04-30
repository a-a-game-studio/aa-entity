/**
 * Описание полей группы
 */
export interface AccessGroupI {
    id?: number; // ID доступа
    id_group?: number; //ID группы
    id_ctrl_access?: number; // ID контроллера
    create_access?: boolean; // Права на создание
    read_access?: boolean; // Права на чтение
    update_access?: boolean; // Права на обновление
    delete_access?: boolean; // Права на удаление
}