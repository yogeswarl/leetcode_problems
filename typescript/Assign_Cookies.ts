function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a,b) => a - b)
  s = s.sort((a,b) => a - b)

  let content = 0
  let i = 0, j = 0;

  while (i < g.length && j < s.length) {
      if (s[j] >= g[i]) {
          content++;
          i++
          j++
      } else {
          j++
      }
  }

  return content
};