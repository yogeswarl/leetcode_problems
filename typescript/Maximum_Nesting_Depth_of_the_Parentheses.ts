function maxDepth(s: string): number {
  let len = 0;
  let finalLength = 0;
  for (let i = 0;i < s.length;i++){
      if(s[i] === '(' ){
          len ++;
      }
      if(s[i]===')'){ 
          len --;
      }
      finalLength = Math.max(finalLength,len)
  }
  return finalLength
};