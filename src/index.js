module.exports = function toReadable (number) {
const NUMBERS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

const DOZENS = {
  1: 'ten',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
};

var numberArray = String(number).split('');
var readableNumber = [];
var length = numberArray.length;

function doubleDigits(location) {
  if (numberArray[location] == '1') {
    readableNumber.push(NUMBERS[numberArray[location] + numberArray[location + 1]]);
  } else {
      if (numberArray[location] != '0') {
        readableNumber.push(DOZENS[numberArray[location]]);
      }        
      if (numberArray[location + 1] != '0') {
        readableNumber.push(NUMBERS[numberArray[location + 1]]);
      }
    }
}

if (length == 1) {
  readableNumber.push(NUMBERS[numberArray[0]]);
} else if (length == 2) {
    doubleDigits(0);
} else if (length == 3) {
  readableNumber.push(NUMBERS[numberArray[0]]+' hundred');
  doubleDigits(1);
} else {
  return 'The number is greater than 999';
}

return readableNumber.join(' ');
}
