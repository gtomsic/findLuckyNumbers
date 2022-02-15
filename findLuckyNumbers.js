// Write your code below this line.
const luckyNumbers = (num) => {
  const randomArr = [];
  for (let i = 0; i < num; i++) {
    const random = Math.floor(Math.random() * 10 + 1);
    if (randomArr.length > 0) {
      randomArr.includes(random) ? true : randomArr.push(random);
    } else {
      randomArr.push(random);
    }
  }
  return randomArr;
};

console.log(luckyNumbers(10));
