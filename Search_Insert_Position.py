# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
# You must write an algorithm with O(log n) runtime complexity.
# Example 1
# Input: nums = [1,3,5,6], target = 5
# Output: 2
from typing import List
class Solution:
  def searchInsert(self, nums: List[int], target: int) -> int:
    for i in range(len(nums)):
      if nums[i] == target:
        return i
      elif nums[i] > target:
        return i
      else:
        j = len(nums)
    return j


sd = Solution()
print(sd.searchInsert([1, 3, 5, 7], 5))
