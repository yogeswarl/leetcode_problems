class RandomizedSet {
  randomSet: Set<number> // value,index
  constructor() {
      this.randomSet = new Set();
  }

  insert(val: number): boolean {
      if(!this.randomSet.has(val)){
          this.randomSet.add(val)
          return true
      }        
      return false;
  }

  remove(val: number): boolean {
      if(!this.randomSet.has(val)){
          return false;
      }
      this.randomSet.delete(val);
      return true;
  }

  getRandom(): number {
      const index = Math.floor(Math.random() * this.randomSet.size);
      return [...this.randomSet][index]
  }
}

