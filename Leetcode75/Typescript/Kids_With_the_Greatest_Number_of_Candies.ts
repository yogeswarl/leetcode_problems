// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   const kidWithTheHighestCandy = Math.max(...candies);
//   console.log(kidWithTheHighestCandy);
//   const results: boolean[] = []
//   for(let i = 0;i<candies.length;i++){
//       const newHighestCandyHolder = candies[i]+extraCandies;
//       if(newHighestCandyHolder > kidWithTheHighestCandy) {
//           results.push(true);
//       }
//       else {
//           results.push(false);
//       }
//   }
//   return results;
// };
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const kidWithTheHighestCandy = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= kidWithTheHighestCandy);
}

console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true,true,true,false,true]