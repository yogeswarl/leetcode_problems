// Time complexity issues

// function climbStairs(n: number): number {
//   if( n < 4){
//       return n 
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };

function climbStairs(n: number): number {
  if (n <= 1) return 1;
  let firstNum: number = 1, secondNum: number = 1, thirdNum: number = 0;
  for (let i: number = 2; i <= n; i++) {
      thirdNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = thirdNum;
  }
  return thirdNum;
}
