import html from "./footer.component.html";
import "./footer.component.scss";

const module = angular.module("app");
module.component("appFooter", {
  template: html,
  controller: class AppFooterCtrl {
    constructor($scope) {
      // example using scope. Just for demo.
      // Please do not use scope. Prefer exposing attribute/method directly under the ctrl.
      console.log("$scope: ", $scope);
      const year = new Date().getFullYear();
      $scope.copyright = `©${year} - Orsys`;
    }
  },
});
