### Hexlet tests and linter status:
[![Actions Status](https://github.com/542993/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/542993/frontend-project-lvl2/actions)
[![Actions Status](https://github.com/542993/frontend-project-lvl2/workflows/linter-check/badge.svg)](https://github.com/542993/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/f7d22f37c9f39bcaede2/maintainability)](https://codeclimate.com/github/542993/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f7d22f37c9f39bcaede2/test_coverage)](https://codeclimate.com/github/542993/frontend-project-lvl2/test_coverage)
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
