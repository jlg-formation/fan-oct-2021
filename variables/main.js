"use strict";

var maJolieVariable = 32;

maJolieVariable = 45;

console.log("this: ", this);

function toto(qq, aa) {
  console.log("toto");
  console.log("qq: ", qq);
  console.log("aa: ", aa);
  console.log("this: ", this);
}

const titi = () => {
  console.log("toto");
  console.log("this: ", this);
};

const truc = {
  tata: toto,
};

toto("hello", "string");
titi();
truc.tata("hello", "string");

toto.bind(34)("hello", "string");
toto.apply(12, ["hello", "string"]);
toto.call(13, "hello", "string");

const zz = new toto("hello", "string");
console.log("zz: ", zz);

const tutu = x => {
  return 2 * x;
};

const tutu2 = (x, y) => x + y;

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log("Hello I am " + this.name + " and my age is " + this.age);
};

var alice = new Person("Alice", 13);
alice.sayHello();
console.log("alice: ", alice);
var bob = new Person("Bob", 15);
bob.sayHello();
console.log("bob: ", bob);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello I am " + this.name + " and my age is " + this.age);
  }
}

const charly = new Person2("Charly", 17);
charly.sayHello();
console.log("charly: ", charly);
