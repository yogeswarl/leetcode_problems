function removeElement(nums: number[], val: number): number {
  let counter: number =0
  for(let i =0;i < nums.length;i++){
      if(nums[i] !== val){
          nums[counter] = nums[i];
          counter++;
      }
  }
  return counter;
};