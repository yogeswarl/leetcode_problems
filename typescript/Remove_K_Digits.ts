function removeKdigits(num: string, k: number): string {
  let numSize: number = num.length;
  let refinedString: string = "";
  
  for (let i=0; i<numSize; ++i) {
      while(refinedString.length > 0 && refinedString[refinedString.length - 1] > num[i] && k > 0) {
          refinedString = refinedString.slice(0, refinedString.length - 1);
          k--;
      }
      
      if(refinedString.length > 0 || num[i] != "0") {
          refinedString += num[i];
      }
  }
  
  while (k > 0) {
      refinedString = refinedString.slice(0, refinedString.length - 1);
      k--;
  }
  
  if (refinedString === "") return "0";
  
  return refinedString;
};

console.log(removeKdigits("1432219", 3)); // 1219
console.log(removeKdigits("10200", 1)); // 200
