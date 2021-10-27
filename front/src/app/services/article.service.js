var module = angular.module("app");

const url = "http://localhost:3000/articles";

module.service("articleService", [
  "$http",
  "$q",
  function ArticleService($http, $q) {
    this.articles = [
      { name: "Tournevis", price: 2.99, qty: 110 },
      { name: "Pelle", price: 3.5, qty: 20 },
      { name: "Pince", price: 4.0, qty: 30 },
      { name: "Tondeuse à gazon", price: 200, qty: 4 },
      { name: "Marteau", price: 1.23, qty: 200 },
    ];

    this.add = function (article) {
      return $http
        .post(url, article)
        .then(() => {
          this.refresh();
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };

    this.remove = function (selectedArticles) {
      let promise = $q.resolve();
      console.log("promise: ", promise);
      for (const article of selectedArticles) {
        promise = promise.then(() => {
          console.log("delete article ", article.id);
          return $http
            .delete(url + "/" + article.id)
            .then(() => {
              console.log("delete success ", article.id);
            })
            .catch((err) => {
              console.log("err: ", err);
            });
        });
      }
      promise.then(() => {
        console.log("about to refresh");
        return this.refresh();
      });
    };

    this.refresh = function () {
      return $http
        .get(url)
        .then((response) => {
          console.log("response: ", response);
          this.articles = response.data;
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    };

    this.refresh();
  },
]);
