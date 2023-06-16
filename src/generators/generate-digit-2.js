function generateSecondDigit(generatedFirstDigit) {
    if (generatedFirstDigit == 0) {
        return 9;
    }
    const customerSex = prompt("Какъв е твоят пол M/F");
    if (customerSex == "M") return 1;
    if (customerSex == "F") return 2;
    
    // var generatedNumber = 0;
    // do {

    //     generatedNumber = getRandom(1, 9);

    // } while (generatedNumber == 1 || generatedNumber == 3);

    var generatedNumber = getRandom (1, 9);
    // if (generatedNumber == 1) return generatedNumber++;
    // if (generatedNumber == 3) return generatedNumber++;
    if (generatedNumber ==1 || generatedNumber == 3) return ++generatedNumber; // префиксна инкрементация, а не суфиксна, за да се изпълни на този ред
    generatedNumber;
}