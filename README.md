# MeriradionumerotApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.


HUOM!

1) Lisätty juureen proxy.conf.json -tiedosto, data näkyy -> verkkoosoite/api

API:

{
    "/api": {
      "target": "https://opendata.traficom.fi/api/v8/Meriradionumerot",
      "secure": true,
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": ""
      }
    }
  }



2) Lisätään määrittely "options": angular.json -tiedostoon, suurinpiirtein riville 60+ kohtaan

..
architect 
..
..
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",

          "options": {
            "browserTarget": "angular-application-name:build",
            "proxyConfig": "proxy.conf.json"
          },
