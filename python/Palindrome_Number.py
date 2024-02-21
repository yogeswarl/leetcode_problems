# Palindrome Number
# Given an integer x, return true if x is a palindrome, and false otherwise.

# example
# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.

class Solution:
    def isPalindrome(self, x: int) -> bool:
        x = str(x)
        if x == x[::-1]:
            return True
        return False

sd = Solution()
print(sd.isPalindrome(11))
print(sd.isPalindrome(-10))