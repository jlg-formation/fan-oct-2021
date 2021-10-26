console.log("module load");

import "./stock/stock.module";

var module = angular.module("app", ["ui.router", "app.stock"]);

require("./header/header.component");
require("./body/body.component");
require("./footer/footer.component");

require("./routes/home/home.component");
require("./routes/legal/legal.component");

module.config([
  "$stateProvider",
  function ($stateProvider) {
    console.log("configuring router");
    var homeState = {
      name: "home",
      url: "/home",
      component: "appHome",
    };

    var legalState = {
      name: "legal",
      url: "/legal",
      component: "appLegal",
    };

    $stateProvider.state(legalState);
    $stateProvider.state(homeState);
  },
]);
