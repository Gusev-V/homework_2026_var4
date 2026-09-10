'use strict';

/**
 * Вычисляет факториал неотрицательного целого числа
 * @param {number} num - неотрицательное целое число <= 170
 * @returns {number} - факториал числа num
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @example
 * // throw Error
 * factorial(-1); 
 */
const factorial = function(num) {

    if (num < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');   
    }
    if (!Number.isInteger(num)) {
        throw new Error('Факториал определен только для целых чисел');
    }
    // Проверка на слишком большое число 
    // (из-за 64 битных чисел в JS num > 170 дает ответ Infinity)
    if (num > 170) {
        throw new Error('Число слишком большое');
    }

    if (num === 0)
        return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    
    return result;
};
