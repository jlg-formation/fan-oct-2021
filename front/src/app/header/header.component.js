import html from "./header.component.html";

console.log("header load");

var module = angular.module("app");
module.component("appHeader", {
  template: html,
});
