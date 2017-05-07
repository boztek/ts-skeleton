import Counter from "./lib/counter";

let button = document.createElement('button'),
    count = document.createElement('span'),
    container = document.createElement('div'),
    counter = new Counter();

container.classList.add('container');

button.textContent = "Click to increase";
button.setAttribute("name", "inc");
button.classList.add("btn");

count.classList.add("counter");
count.textContent = "0";

document.body.appendChild(container);
container.appendChild(count);
container.appendChild(button);

button.addEventListener("click", () => {
  let c = counter.inc();
  count.textContent = c.toString();
});