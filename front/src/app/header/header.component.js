import html from "./header.component.html";
import "./header.component.scss";

console.log("header load");

var module = angular.module("app");
module.component("appHeader", {
  template: html,
});
