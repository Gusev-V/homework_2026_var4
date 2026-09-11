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
let factorialCache = [1];
let factorialCacheSize = 1;

const MAX_CACHE_SIZE = 50;

const factorial = function(num) {

    if (num < 0) {
        throw new Error('Факториал не определен для отрицательных чисел');   
    }
    if (!Number.isInteger(num)) {
        throw new Error(`Факториал не определен для ${num}, тип данных - ${typeof num}`);
    }
    // Проверка на слишком большое число 
    // (из-за 64 битных чисел в JS num > 170 дает ответ Infinity)
    if (num > 170) {
        throw new Error('Число слишком большое');
    }

    // Если такой факториал уже считался берем его
    if (factorialCache[num] !== undefined ) {
        return factorialCache[num];
    }

    // Поиск ближайщего уже вычесленного факториала из кэша
    let leftNum = num - 1;
    let rightrNum = num + 1;
    let nearestNum = 0;
    let foundRight = false;

    while (leftNum >= 0 || rightrNum < factorialCache.length) {
        if (factorialCache[leftNum] !== undefined){
            nearestNum = leftNum;
            break;
        }
        if (factorialCache[rightrNum] !== undefined){
            nearestNum = rightrNum;
            foundRight = true;
            break;
        }
        leftNum--;
        rightrNum++;
    }
    
    let result = factorialCache[nearestNum];
    // Если ближайщий существующий факториал находится справа, то делим до нужного
    if (foundRight){
        for (let i = nearestNum; i >= num + 1; i--) {
            // round используется для устранения артифактов деления, безопасно тк result / i обязан дать целочисленный ответ
            result = Math.round(result / i);
        }
    }
    // Если ближайщий существующий факториал находится слево, то умножаем до нужного
    else {
        for (let i = nearestNum + 1; i <= num; i++) {
            result *= i;
        }
    }

    // Сбрасываем кэш перед добавлением нового значения, если достигнут лимит
    if (factorialCacheSize >= MAX_CACHE_SIZE) {
        factorialCache = [1];
        factorialCacheSize = 1;
    }

    // Записываем в кэш вычисленное значение
    factorialCache[num] = result;
    factorialCacheSize++;
    
    return result;
};
