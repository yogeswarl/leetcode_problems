const twoSum = (nums: number[], target: number): number[] | undefined => {
  const map = new Map<number, { idx :number}>(); //generate a map to store number and its index
  for(let i = 0; i < nums.length; i++) { // loop through the nums array
      const remain = target - nums[i]; // get the remaining value after subtracting target with nums
      const remainKey =  map.get(remain); // remainKey should basically retrieve a number based on remain.
      if(remainKey) { // if present, return the index of the number and the current loop
          return [remainKey.idx, i]
      }
      map.set(nums[i], { idx: i}); // if not set the current value of nums as key and idx as the value in the map object.
  }
}