///<reference path="../../typings/index.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';
import {provide, PLATFORM_DIRECTIVES} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from './routes';
import {App} from './components/app.component';

bootstrap(App, [APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, , provide(LocationStrategy, { useClass: HashLocationStrategy }), provide(APP_BASE_HREF, { useValue: '/' })]).catch(console.error);
