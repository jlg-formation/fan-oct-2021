"use strict";

const module = angular.module("app.widget");
module.filter("ellipsis", function () {
  return function (input, maxLength = 10) {
    if (input.length > maxLength) {
      return input.substring(0, maxLength) + "...";
    }
    return input;
  };
});
