# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false


class Solution:
    def isValid(self, s: str) -> bool:
      stack = [] 
      pairs = {
          '(': ')',
          '{': '}',
          '[': ']'
      }
      for char in s:
          if char in pairs:
              stack.append(char)
          elif len(stack) == 0 or char != pairs[stack.pop()]:
              return False
      return len(stack) == 0
sd = Solution()
print(sd.isValid("{()[]}")) # false
print(sd.isValid("{}()[]")) # true
print(sd.isValid("(}"))   # false
print(sd.isValid("([)]")) # false
