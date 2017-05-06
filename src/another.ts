class AnotherGreeter {
  constructor(private name = "You") {}

  hi() {
    return `Hey ${this.name}.`;
  }
}

export default AnotherGreeter;