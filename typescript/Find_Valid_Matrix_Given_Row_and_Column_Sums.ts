function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  let rowLen = rowSum.length;
  let colLen = colSum.length;
  let arr = Array.from({length: rowLen},() =>Array(colLen).fill(0));
  let i=0,j=0;
  while(i < rowLen && j < colLen) {
      let min = Math.min(rowSum[i],colSum[j]);
      arr[i][j] = min;
      rowSum[i] -= min;
      colSum[j] -= min;
      
      if(rowSum[i] == 0) i++;
      if(colSum[j] == 0) j++;
  }
  return arr;
};