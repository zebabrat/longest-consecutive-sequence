module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  let countLong = 1;
  let resultLength = 0;

  let newNumbers = new Set(array);

  newNumbers.forEach(number => { 

    while (newNumbers.has(number + 1)) {
      countLong = countLong + 1
      number = number + 1;
    }
    if (countLong > resultLength) { resultLength = countLong }
    countLong = 1

  });
  return resultLength;
}
