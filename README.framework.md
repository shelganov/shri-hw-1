# Framework

## Описание библиотеки
Библиотека реализована независимо от проекта, расположена в ```src/framework/```

### Dispatcher
Класс Dispatcher отвечает за хранение событий и коллбеков, зарегистрированных из store. 

##### Методы:

Регистрация коллбеков для action:

```register (actionType: string, callback: {})```,
 
 где ```actionType``` - тип action, ```callback``` - функция для обработки action

Триггер action при пользовательском действии:

```dispatch(action: { type: string; payload: {}; }): void```,

где ```action``` - сам action, type - тип action, ```payload``` - информация о действии

### Store
Класс Store отвечает за создание хранилища данных.

### Framework
Обертка для всей библиотеки. Инициализируется на весь проект. Создает единственный instance класса Dispatcher.

##### Методы:

Регистрация коллбеков для action:

```register (actionType: string, callback: {})```,

где ```actionType``` - тип action, ```callback``` - функция для обработки action

Триггер action при пользовательском действии:

```dispatch(action: { type: string; payload: {}; }): void```,

где ```action``` - сам action, type - тип action, ```payload``` - информация о действии

Создает instance Store:

```createStore(state: {}): {data: {}}```, 

где ```state``` - начальное состояние store.

## Интеграция с проектом

Был реализован функционал смены трека в плеере по нажатию на кнопку "следующий трек". Текущий трек хранится в 
localStorage, при смене - данные сохраняются в store и localStorage, страница перерисовывается.