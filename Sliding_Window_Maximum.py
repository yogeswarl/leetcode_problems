from typing import List
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        max_slide = []
        if len(nums) <=k: return [max(nums)]
        if k ==1: return nums
        for num in range(0,len(nums)- k+1):
            max_slide.append(max(nums[num:num+k]))
        return max_slide
sd = Solution();
print(sd.maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
print(sd.maxSlidingWindow([1],1))
print(sd.maxSlidingWindow([1,-1],1))
print(sd.maxSlidingWindow([7,2,4],2))