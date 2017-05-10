export default class {
  constructor(private greeting: string) {}

  greet(): string {
    return `${this.greeting}`;
  }
}