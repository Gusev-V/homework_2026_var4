'use strict';

/**
 * Вычисляет факториал неотрицательного целого числа
 * @param {number} n - неотрицательное целое число <= 170
 * @returns {number} - факториал числа n
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 *  @example
 * // throw Error
 * factorial(-1);
 * 
 */

const factorial = function(num) {

    // Проверка на отрицательные числа
    if (num < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');   
    }
    // Проверка на целое число
    if (!Number.isInteger(num)) {
        throw new Error('Факториал не определен для дробных чисел');
    }
    // Проверка на слишком большое число 
    // (из-за 64 битных чисел в JS num > 170 дает ответ Infinity)
    if (num > 170) {
        throw new Error('Число слишком большое');
    }

    // Обработка нуля
    if (num === 0)
        return 1;
    
    // Вычисление
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    return result;
};
