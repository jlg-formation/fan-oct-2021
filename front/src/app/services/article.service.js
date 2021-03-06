const module = angular.module("app");

const url = "/articles";

module.service("articleService", function ArticleService($http, $q) {
  this.articles = [];

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
});
