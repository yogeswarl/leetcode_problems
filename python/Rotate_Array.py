from typing import List
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k %= n

        # Reverse the entire array
        self.reverse(nums, 0, n - 1)

        # Reverse the first k elements
        self.reverse(nums, 0, k - 1)

        # Reverse the remaining n-k elements
        self.reverse(nums, k, n - 1)

    def reverse(self, nums: List[int], start: int, end: int) -> None:
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

sd = Solution()
print(sd.rotate([1,2,3,4,5,6,7],3))
print(sd.rotate([-1,-100,3,99],2))