function generateThirdDigit() {
    if (globalConfig.isCustomerAdult) return 0;

    const fatherBirthDate = prompt(`Въведете годината на раждане на баща Ви:`);
    const motherBirthDate = prompt(`Въведете годината на раждане на майка Ви:`);

    // if (motherBirthDate[3] == fatherBirthDate[3]) {
    //     return motherBirthDate[2];
    // }
    // return fatherBirthDate[3];

    return (motherBirthdate[3] == fatherBirthDate[3])
    ? motherBirthDate[2]
    : fatherBirthDate[3];
}