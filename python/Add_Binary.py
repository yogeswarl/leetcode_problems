# Given two binary strings a and b, return their sum as a binary string.

 

# Example 1:

# Input: a = "11", b = "1"
# Output: "100"
# Example 2:

# Input: a = "1010", b = "1011"
# Output: "10101"

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        return bin(int(a,2) + int(b,2))[2:]

sd = Solution()
print(sd.addBinary("11","1")) # "100"
print(sd.addBinary("1010","1011")) # "10101"
print(sd.addBinary("0","0")) # "0"