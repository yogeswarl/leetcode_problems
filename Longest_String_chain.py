# You are given an array of words where each word consists of lowercase English letters.

# wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

# For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
# A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

# Return the length of the longest possible word chain with words chosen from the given list of words.
from typing import List
class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        wordLong = {}
        sorted_words = sorted(words,key=lambda x: len(x))
        for word in sorted_words:
            wordLong[word] = 1
            for i in range(len(word)):
                pred = word[:i] + word[i+1:]
                if pred in wordLong:
                    wordLong[word] = max(wordLong[word], wordLong[pred] + 1)

        return max(wordLong.values())
sd = Solution()
print(sd.longestStrChain(["a","b","ba","bca","bda","bdca"]))

