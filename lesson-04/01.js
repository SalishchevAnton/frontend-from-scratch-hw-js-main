/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

const array = [1, 2, 3, 4, 5];
const element = 4
function includesElement(array, element) {
    let result = false
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result = true
        }
    }
    return result
}


let value = includesElement(array, 7);
console.log(value)

