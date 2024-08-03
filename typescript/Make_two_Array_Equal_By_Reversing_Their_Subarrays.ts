
function canBeEqual(target: number[], arr: number[]): boolean {
  let arr1 = new Array(1001).fill(0);
  let arr2 = new Array(1001).fill(0);
  for(let x of target)arr1[x]++
  for(let x of arr)arr2[x]++
  for(let i=1;i<1001;i++){
      if(arr1[i]!=arr2[i]){
          return false
      }
  }
  return true
};