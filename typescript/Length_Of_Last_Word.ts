function lengthOfLastWord(s: string): number{
  return s.trim().split(' ').pop()?.length || 0;
};

console.log(lengthOfLastWord("the sky is blue")) // ["the", "sky", "is", "blue"]
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // ["fly", "me", "to", "the", "moon"]