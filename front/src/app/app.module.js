console.log("module load");

import "./stock/stock.module";

var module = angular.module("app", ["ui.router", "app.stock"]);

require("./services/article.service");

require("./header/header.component");
require("./body/body.component");
require("./footer/footer.component");

require("./routes/home/home.component");
require("./routes/legal/legal.component");

module.config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    console.log("configuring router");
    $stateProvider.state({
      name: "home",
      url: "/",
      component: "appHome",
    });
    $stateProvider.state({
      name: "legal",
      url: "/legal",
      component: "appLegal",
    });

    $stateProvider.state({
      name: "stockList",
      url: "/stock",
      component: "appList",
    });
    $stateProvider.state({
      name: "stockAdd",
      url: "/stock/add",
      component: "appAdd",
    });

    $urlRouterProvider.otherwise("/");
  },
]);
