### Hexlet tests and linter status:
[![Actions Status](https://github.com/542993/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/542993/frontend-project-lvl2/actions)
[![Actions Status](https://github.com/542993/frontend-project-lvl2/workflows/linter-check/badge.svg)](https://github.com/542993/frontend-project-lvl2/actions)
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>
<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

## ПРОЕКТ "ВЫЧИСЛИТЕЛЬ ОТЛИЧИЙ"
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:
    Поддержка разных входных форматов: yaml, json
    Генерация отчета в виде plain, stylish и json


### Установка и запуск 

$ git clone https://github.com/542993/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
$ npm link
$ gendiff -h


### Демонтрация отличий 

#### Сравнение файлов в формате stylish


$gendiff file1.json file2.json  $gendiff filepath1.yml filepath2.yml


[![asciicast](https://asciinema.org/a/CEsU6iQDZrzyZR33UlW0GnOtH.svg)](https://asciinema.org/a/CEsU6iQDZrzyZR33UlW0GnOtH)


####  Сравнение файлов в формате plain



$gendiff -f plain file1.json file2.json $gendiff --format plain filepath1.yml filepath2.yml


[![asciicast](https://asciinema.org/a/sXvzfKlKvFbN52UMp791aBYBj.svg)](https://asciinema.org/a/sXvzfKlKvFbN52UMp791aBYBj)


####  Сравнение файлов в формате json


$gendiff -f json file1.json file2.json   $gendiff --format json file1path1.yml filepath2.yml


[![asciicast](https://asciinema.org/a/vbQZeYqDfsZEcHFBw6T6MHRFk.svg)](https://asciinema.org/a/vbQZeYqDfsZEcHFBw6T6MHRFk)
