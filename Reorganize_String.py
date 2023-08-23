# Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

# Return any possible rearrangement of s or return "" if not possible.
# Example 1:

# Input: s = "aab"
# Output: "aba"
# Example 2:

# Input: s = "aaab"
# Output: ""

from collections import Counter
import heapq


class Solution:
    def reorganizeString(self, s: str) -> str:
        heap = []
        for key, val in Counter(s).items():
            heapq.heappush(heap, (-val, key))
        res = ""
        while len(heap) > 1:
            freq1, char1 = heapq.heappop(heap)
            freq2, char2 = heapq.heappop(heap)
            res += char1 + char2
            if freq1 + 1 < 0:
                heapq.heappush(heap, (freq1 + 1, char1))
            if freq2 + 1 < 0:
                heapq.heappush(heap, (freq2 + 1, char2))
        if heap:
            freq, char = heapq.heappop(heap)
            if freq < -1:
                return ""
            else:
                res += char
        return res


sd = Solution()
print(sd.reorganizeString("aab"))
print(sd.reorganizeString("aaab"))
print(sd.reorganizeString("vvvlo"))
print(sd.reorganizeString("bfrbs"))
print(sd.reorganizeString("ogccckcwmbmxtsbmozli"))
