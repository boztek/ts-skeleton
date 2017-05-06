function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User",
    age = 42;

export default () => document.body.innerHTML = greeter(user);