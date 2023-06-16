function generateFifthDigit() {

    const preferProduct = +prompt(`Изберете категория предпочитан продукт!`); // 1
    const productFrequency = +prompt(`Колко често пазарувате?`); // 2

    return preferProduct + productFrequency;

}