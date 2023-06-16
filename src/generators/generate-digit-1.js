//

// първа цифрак
function generatefunctionalCoefficient() {
    const customerYearOfBirth   = 1992;
    const currentYear           = (new Date()).getFullYear();
    const customerAge = currentYear - customerYearOfBirth;
}

// присвои стойност на глобална променлива
globalConfig.customerAge        = customerAge;
globalConfig.isCustomerAdult    = customerAge >= 18;

const customerRandomCoefficient = getRandom(1, 7);
return parseInt(customerAge / customerRandomCoefficient);


