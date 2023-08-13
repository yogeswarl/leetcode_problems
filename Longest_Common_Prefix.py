# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".
# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
from typing import List
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        longest_prefix = ""
        for i in range(len(strs[0])):
            for s in strs:
                if i == len(s) or s[i] != strs[0][i]:
                    return longest_prefix
            longest_prefix = s[:i+1]
        return longest_prefix
    
sd = Solution()
print(sd.longestCommonPrefix(["flower","flow","flight"]))