function scoreOfString(s: string): number {
  let sum = 0;
  for(let i = 1;i<= s.length -1 ;i++){
      sum += Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
  }
  return sum;
};

console.log(scoreOfString("aba") === 2);
console.log(scoreOfString("abc") === 4);
console.log(scoreOfString("abcd") === 6);
console.log(scoreOfString("abcde") === 8);
