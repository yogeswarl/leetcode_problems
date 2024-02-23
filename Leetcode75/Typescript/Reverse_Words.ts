function reverseWords(s: string) {
    return s.split(/\s+/).reverse().join(' ');
};

console.log(reverseWords("the sky is blue"))