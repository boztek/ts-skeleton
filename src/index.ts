import greet from "./greeter";
import AnotherGreeter from "./another";

greet();
let g2 = new AnotherGreeter("Boris"),
    greeting = g2.hi();
console.log("Another greeting:", greeting);