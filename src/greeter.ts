function greeter(person: string) {
  return `<p class="greeting">Hello there ${person}.</p>`;
}

let user = "Fella",
    age = 42;

export default () => document.body.innerHTML = greeter(user);