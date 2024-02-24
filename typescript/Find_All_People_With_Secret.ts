// Example 1:
// Input: n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1
// Output: [0,1,2,3,5]

// Explanation:

// At time 0, person 0 shares the secret with person 1.
// At time 5, person 1 shares the secret with person 2.
// At time 8, person 2 shares the secret with person 3.
// At time 10, person 1 shares the secret with person 5.​​​​
// Thus, people 0, 1, 2, 3, and 5 know the secret after all the meetings.

// Example 2:
// Input: n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3
// Output: [0,1,3]

// Explanation:

// At time 0, person 0 shares the secret with person 3.
// At time 2, neither person 1 nor person 2 know the secret.
// At time 3, person 3 shares the secret with person 0 and person 1.
// Thus, people 0, 1, and 3 know the secret after all the meetings.
// Example 3:

// Input: n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1
// Output: [0,1,2,3,4]
// Explanation:
// At time 0, person 0 shares the secret with person 1.
// At time 1, person 1 shares the secret with person 2, and person 2 shares the secret with person 3.
// Note that person 2 can share the secret at the same time as receiving it.
// At time 2, person 3 shares the secret with person 4.
// Thus, people 0, 1, 2, 3, and 4 know the secret after all the meetings.

class PriorityQueue<T> {
  private items: {element: T, priority: number}[];

  constructor() {
      this.items = [];
  }

  enqueue(element: T, priority: number): void {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
          if (priority < this.items[i].priority) {
              this.items.splice(i, 0, {element, priority});
              added = true;
              break;
          }
      }
      if (!added) {
          this.items.push({element, priority});
      }
  }

  dequeue(): T | undefined {
      return this.items.shift()?.element;
  }

  isEmpty(): boolean {
      return !this.items.length;
  }
}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
  const meeting = new Map<number, number>();
  meeting.set(0, 0);
  meeting.set(firstPerson, 0);

  const pq = new PriorityQueue<number[]>();
  for (const m of meetings) {
    pq.enqueue(m, m[2]);
  }

  while (!pq.isEmpty()) {
    const [person1, person2, time] = pq.dequeue()!;
    if (meeting.has(person1) && meeting.get(person1)! <= time && !meeting.has(person2)) {
      meeting.set(person2, time);
    }
    if (meeting.has(person2) && meeting.get(person2)! <= time && !meeting.has(person1)) {
      meeting.set(person1, time);
    }
  }

  return Array.from(meeting.keys());
};


console.log(findAllPeople(6,[[1,2,5],[2,3,8],[1,5,10]],1)) // [0,1,2,3,5]
console.log(findAllPeople(4,[[3,1,3],[1,2,2],[0,3,3]],3)) // [0,1,3]
console.log(findAllPeople(5,[[3,4,2],[1,2,1],[2,3,1]],1)) // [0,1,2,3,4]
console.log(findAllPeople(11,[[5,1,4],[0,4,18]],1)) // [0,1,5,4]
console.log(findAllPeople(5,[[1,4,3],[0,4,3]],3)) // [0,1,2,3,4]