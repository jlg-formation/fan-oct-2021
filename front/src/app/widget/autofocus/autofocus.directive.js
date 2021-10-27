"use strict";

const module = angular.module("app.widget");
module.directive("appAutofocus", function () {
  return {
    controller: class AppAutofocusCtrl {
      constructor($element) {
        console.log("instantiate directive");
        console.log("$element: ", $element[0]);
        setTimeout(() => {
          $element[0].select();
        }, 0);
      }
    },
  };
});
