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
