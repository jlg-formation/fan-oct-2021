var module = angular.module("app");

module.service("articleService", [
  "$http",
  function ArticleService($http) {
    this.articles = [
      { name: "Tournevis", price: 2.99, qty: 110 },
      { name: "Pelle", price: 3.5, qty: 20 },
      { name: "Pince", price: 4.0, qty: 30 },
      { name: "Tondeuse à gazon", price: 200, qty: 4 },
      { name: "Marteau", price: 1.23, qty: 200 },
    ];

    this.add = function (article) {
      this.articles.push(article);
      $http
        .post("/api/articles", article)
        .then(() => {
          this.refresh();
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };

    this.refresh = function () {
      $http
        .get("/api/articles")
        .then((articles) => {
          this.articles = articles;
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };

    this.refresh();
  },
]);
