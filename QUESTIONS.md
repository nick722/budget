22.10.2019:
Как лучше организовать данные на сервере:

Учитывая что предполагаются категории транзакций(доход/расход, одежда/обувь и т.п.) как лучше:

- Сделать вложенную структуру json объекта и класть транзакции в соответствующие разделы
  или
- Указывать в транзакциях, в соответствующих полях, к какой категории они принадлежат, и в зависимости от этого рендерить.

Или можно пока не заморачиваться с этим, показывать транзакции единым списком?

Т.к. есть много других интересных штук, с которыми бы я охотнее повозился - типа SSR'а или тестирования редакса.

2. Что такое rem()?

Sass mixin that converts pixel values to rem values for whatever property is passed to it

https://www.npmjs.com/package/sass-rem

или нет?

3. Does deep nesting flexbox layout cause performance issue?
   https://stackoverflow.com/questions/39463220/does-deep-nesting-flexbox-layout-cause-performance-issue
   TLDR: The difference is not that much
