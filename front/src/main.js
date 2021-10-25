(function () {
  "use strict";

  var module = angular.module("app", []);

  module.component("appHeader", {
    templateUrl: "tmpl/appHeader.html",
  });
  module.component("appBody", {
    templateUrl: "tmpl/appBody.html",
  });
  module.component("appFooter", {
    templateUrl: "tmpl/appFooter.html",
  });
})();
