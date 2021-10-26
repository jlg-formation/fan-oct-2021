import html from "./add.component.html";
import "./add.component.scss";

var module = angular.module("app.stock");
module.component("appAdd", {
  template: html,
  controller: [
    "articleService",
    "$state",
    function (articleService, $state) {
      this.article = {
        name: "Truc",
        price: 1.23,
        qty: 100,
      };
      this.submit = function () {
        articleService.add(this.article);
        $state.go("stockList");
      };
    },
  ],
});
