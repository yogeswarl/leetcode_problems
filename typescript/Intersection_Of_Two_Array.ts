function intersection(nums1: number[], nums2: number[]): number[] {
  let unique1 = [...new Set(nums1)]  
  let unique2 = [...new Set(nums2)]  
  if(nums1.length> nums2.length) {
      return intersect(unique1,unique2);
  }
  else {
       return intersect(unique2,unique1);
  }
};
const intersect = (arr1,arr2): number[] => arr1.filter(num => arr2.includes(num))