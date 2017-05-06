function greeter(person: string) {
  return `<p class="greeting">Hello there ${person}.</p>`;
}

let user = "Mr. User",
    age = 42;

export default () => document.body.innerHTML = greeter(user);
