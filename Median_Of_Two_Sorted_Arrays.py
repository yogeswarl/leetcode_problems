# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. 

# Example 1:

# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Explanation: merged array = [1,2,3] and median is 2.
# Example 2:

# Input: nums1 = [1,2], nums2 = [3,4]
# Output: 2.50000
# Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
import statistics
from typing import List
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        list3 = nums1 + nums2
        list3 = sorted(list3)
        return statistics.median(list3)
    
sd = Solution()
sd.findMedianSortedArrays([1,3],[2]) # 2.00000

