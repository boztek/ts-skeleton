class AnotherGreeter {
  constructor(private name = "You") {
    console.log(this);
  }

  hi() {
    return `Well well well, hey there ${this.name}.`;
  }
}

export default AnotherGreeter;