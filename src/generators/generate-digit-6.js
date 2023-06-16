function generateSixthDigit(digit1, digit2, digit3, digit4, digit5) {
    const cardNumberSum = digit1 + digit2 + digit3 + digit4 + digit5;
    
    if (cardNumberSum < 9 ) return cardNumberSum;

    do { 
    const newStringNumber = `${cardNumberSum}`;

    for (var i=0; i < newStringNumber.length; i++) {
        cardNumberSum = cardNumberSum + +(newStringNumber[i]);
    }
    } while (cardNumberSum > 9)
    return cardNumberSum;
}