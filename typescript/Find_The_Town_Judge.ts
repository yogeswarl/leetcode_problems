function findJudge(n: number, trust: number[][]): number {
  const trusted: number[] = Array(n + 1).fill(0);
  for(const [a,b] of trust ){
    trusted[a] = NaN;
    trusted[b]++;
  }

  return trusted.indexOf(n-1) || 1;
};

console.time();
console.log(findJudge(3,[[1,2],[2,3]]))
console.timeEnd()