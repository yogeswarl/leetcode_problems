function titleToNumber(columnTitle: string): number {
  let multiplier:number = 1;
  let number:number = 0;
  for(let i = columnTitle.length -1; i >= 0;i--){
    console.log((columnTitle.charCodeAt(i) - 64));
    number = number + (multiplier * (columnTitle.charCodeAt(i) - 64))
    multiplier*=26;
  }
  return number
};

console.log(titleToNumber("ZY")) // 701

// const text = "ZY"; // 701
// console.log(text.charCodeAt(0) - 65);
// console.log(text.charCodeAt(1) - 65);
// console.log(text.charCodeAt(2) - 65);
// console.log(text.charCodeAt(3) - 65);

