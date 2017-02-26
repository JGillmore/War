var app = angular.module("cardApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/index.html",
        controller: "DeckController"
    }).when("/war", {
      templateUrl: "partials/war.html",
      controller: "WarController"
    })

});
