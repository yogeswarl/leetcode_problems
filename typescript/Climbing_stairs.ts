// Time complexity issues
function climbStairs(n: number): number {
  if( n < 4){
      return n 
  }
  return climbStairs(n - 1) + climbStairs(n - 2)
};
