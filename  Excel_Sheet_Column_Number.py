# Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

# For example:

# A -> 1
# B -> 2
# C -> 3
# ...
# Z -> 26
# AA -> 27
# AB -> 28 
# ...
 

# Example 1:

# Input: columnTitle = "A"
# Output: 1
# Example 2:

# Input: columnTitle = "AB" B = 2  A = 26 * 1
# Output: 28
# Example 3:

# Input: columnTitle = "ZY" Y = 25  Z = 26*26
# Output: 701

# Input: columnTitle = "AZY" Y = 25  Z = 26*26 A = 26*26*1 
# Output: 1377

class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
      columnNumber,pos = 0,0
      for value in reversed(columnTitle):
        columnNumber+= 26**pos * (ord(value) - 64)
        pos +=1
      return columnNumber
      
sd = Solution()
sd.titleToNumber('A') # 1
sd.titleToNumber('AB') # 28
sd.titleToNumber('ZY') # 701
