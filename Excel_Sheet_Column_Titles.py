# Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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

# Input: columnNumber = 1
# Output: "A"
# Example 2:

# Input: columnNumber = 28
# Output: "AB"
# Example 3:

# Input: columnNumber = 701
# Output: "ZY"


class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        if columnNumber <27:
            return chr(ord('A') + (columnNumber -1) % 26)
        c = ''
        while columnNumber > 0:
            if columnNumber%26==0:
                c+=chr(ord('A') + 25)
                columnNumber-=1
            else:
                c+=chr(ord('A') + columnNumber % 26 - 1)
            columnNumber//=26
        return c[::-1]
        
