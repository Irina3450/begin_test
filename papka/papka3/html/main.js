// Форма поиска ( Сразу же помечаем объект поиска, как инициализированный, чтобы случайно не инициализировать его дважды.)
function SearchFieldInit(obj) {
  // Блок в котором лежит поле поиска
  obj.f_search = obj.find('.search__form');
  // Если поля поиска не нашлось, завершаем работу, ничего страшного.
  if(0 == obj.f_search.length) {
    return false;
  }
  // Поле поиска товара
  obj.s_search = obj.f_search.find('.search__input');
  // Обнуление данных в форме поиска
  obj.s_reset  = obj.f_search.find('.search__reset');
  // Проверка на существование функции проверки поля и действий с ним
  if(typeof(obj.SearchFieldCheck) != 'function') {
    console.log('function SearchFieldCheck is not found in object for SearchFieldInit', {status: 'error'});
    return false;
  // Проверка, сколько полей поиска нам подсунули за раз на инициализацию
  } else if(1 < obj.f_search.length) {
    console.log('function SearchFieldInit must have only one search object', {status: 'error'});
    return false;
  }
