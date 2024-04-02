// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let start = 0;
  let map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i])! + 1, start);
    }
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}

// Time complexity: O(n)
// Space complexity: O(n)
console.log(lengthOfLongestSubstring("abcabcbb") === 3)
console.log(lengthOfLongestSubstring("bbbbb") === 1)
console.log(lengthOfLongestSubstring("pwwkew") === 3)
