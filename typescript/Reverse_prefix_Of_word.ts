function reversePrefix(word: string, ch: string): string {
  // const wordSplit = word.split('')
  const index = word.indexOf(ch);
  if (index !== -1) {
    const prefixReversed = word.slice(0, index + 1).split('').reverse().join('');
    return prefixReversed + word.slice(index + 1);
  }
  return word;
};

console.log(reversePrefix('abcdefg','d')) // Output: dcbaefg