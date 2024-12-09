const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
  INVALID_PASSWORD: 'Неверный пароль',
}
export function error(code){
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка';

}