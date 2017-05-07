export interface Counter {
  inc(): number,
  dec(): number,
};

export default class implements Counter {
  count: number = 0;

  inc() {
    this.count += 1;
    return this.count;
  }

  dec() {
    this.count += 1;
    return this.count;
  }
}