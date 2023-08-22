# You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
# Return the merged string.

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        return "".join(a+b for a, b in zip(word1,word2)) + word1[len(word2):] + word2[len(word1):]
    
sd = Solution()
sd.mergeAlternately('abc','pqr')
sd.mergeAlternately('abcd','pq')
