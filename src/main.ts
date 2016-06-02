///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SanguoshaAppComponent, environment } from './app/';
// service:
import { CommonService } from './app/services/common.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(SanguoshaAppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	CommonService
]);
