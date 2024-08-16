function lemonadeChange(bills: number[]): boolean {
  const pays = 5;
  const payMap = new Map<number,number>([[5, 0], [10, 0]]);
  for(let bill of bills){
      if(bill === pays) {
        payMap.set(5, payMap.get(5)! + 1);
      } else if(bill === 10) {
        if(payMap.get(5)! <= 0) return false;
        payMap.set(5, payMap.get(5)! - 1);
        payMap.set(10, payMap.get(10)! + 1);
      }
      else {
        if (payMap.get(10)! > 0 && payMap.get(5)! > 0) {
          payMap.set(10, payMap.get(10)! - 1);
          payMap.set(5, payMap.get(5)! - 1);
        } else if (payMap.get(5)! >= 3) {
            payMap.set(5, payMap.get(5)! - 3);
        } else {
            return false;
        }
      }
  }
  return true
};

console.log(lemonadeChange([5,5,5,10,20])) // true
console.log(lemonadeChange([5,5,10])) // true
console.log(lemonadeChange([5,5,10,10,20])) // false