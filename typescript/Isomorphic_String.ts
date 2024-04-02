function isIsomorphic(s: string, t: string): boolean {
  const lenMap1 = new Array(256).fill(0);
  const lenMap2 = new Array(256).fill(0);
  for (let i = 0; i < s.length; i++) {
      if (lenMap1[s.charCodeAt(i)] !== lenMap2[t.charCodeAt(i)]) return false;
      lenMap1[s.charCodeAt(i)] = i + 1;
      lenMap2[t.charCodeAt(i)] = i + 1;
  }
  return true;
};

// Solution 2
// function isIsomorphic(s: string, t: string): boolean {
//   const lenMap1 = new Map<string, string>()
//   const lenMap2 = new Map<string, string>()
//   for (let i = 0; i< s.length; i++){
//       if(!lenMap1.has(s[i])) lenMap1.set(s[i],t[i])
//       else if(lenMap1.get(s[i]) !== t[i]) return false;
//       if(!lenMap2.has(t[i])) lenMap2.set(t[i],s[i])
//       else if(lenMap2.get(t[i]) !== s[i]) return false;
//   }
//   return true;
// };