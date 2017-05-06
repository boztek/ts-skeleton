function greeter(person: string) {
  return `<p class="greeting">Hello there ${person}.</p>`;
}

let user = "Boris",
    age = 42;

export default () => document.body.innerHTML = greeter(user);