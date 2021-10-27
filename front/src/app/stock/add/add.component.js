import html from "./add.component.html";
import "./add.component.scss";

const module = angular.module("app.stock");
module.component("appAdd", {
  template: html,
  controller: class AppAddCtrl {
    constructor(articleService, $state) {
      this.article = {
        name: "Truc",
        price: 1.23,
        qty: 100,
      };
      this.articleService = articleService;
      this.$state = $state;
    }

    submit() {
      this.articleService.add(this.article);
      this.$state.go("stockList");
    }
  },
});
