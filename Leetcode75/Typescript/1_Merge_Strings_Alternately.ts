function mergeAlternately(word1: string, word2: string): string {
  const maxLength = Math.max(word1.length, word2.length);
  let response = Array(maxLength).fill('').map((_, index) => {
    let result = '';
    if(index < word1.length) result += word1[index];
    if(index < word2.length) result += word2[index];
    return result;
  }).join('');
  return response;
};