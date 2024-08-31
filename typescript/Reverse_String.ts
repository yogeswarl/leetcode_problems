function reverseString(s: string[]): void {
  let left: number = 0;
  let right: number = s.length - 1;
  
  while (left < right) {
      // Swap the characters at left and right indices
      [s[left], s[right]] = [s[right], s[left]];
      // Move the pointers towards the center
      left++;
      right--;
  }
}