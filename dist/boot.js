///<reference path="../../typings/index.d.ts"/>
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var routes_1 = require('./routes');
var app_component_1 = require('./components/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.App, [routes_1.APP_ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, , core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]).catch(console.error);

//# sourceMappingURL=boot.js.map
