import html from "./list.component.html";
import "./list.component.scss";

var module = angular.module("app.stock");
module.component("appList", {
  template: html,
  controller: [
    "articleService",
    function AppListCtrl(articleService) {
      console.log("articleService: ", articleService);
      this.articleService = articleService;

      this.selectedArticles = new Set();

      this.toggle = function (article) {
        console.log("article: ", article);
        if (this.selectedArticles.has(article)) {
          this.selectedArticles.delete(article);
          return;
        }
        this.selectedArticles.add(article);
      };

      this.hasSelected = function () {
        return this.selectedArticles.size > 0;
      };

      this.remove = () => {
        this.articleService.remove(this.selectedArticles);
        this.selectedArticles.clear();
      };

      this.lessthan1 = function (article) {
        return article.price > 1;
      };
    },
  ],
});
