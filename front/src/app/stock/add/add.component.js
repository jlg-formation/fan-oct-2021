import html from "./add.component.html";
import "./add.component.scss";

var module = angular.module("app.stock");
module.component("appAdd", {
  template: html,
  controller: [
    "articleService",
    function (articleService) {
      this.submit = function () {
        console.log("submit");
      };
    },
  ],
});
