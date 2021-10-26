import html from "./list.component.html";
import "./list.component.scss";

var module = angular.module("app.stock");
module.component("appList", {
  template: html,
});
