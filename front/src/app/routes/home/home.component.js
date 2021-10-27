import html from "./home.component.html";
import "./home.component.scss";

const module = angular.module("app");
module.component("appHome", {
  template: html,
});
