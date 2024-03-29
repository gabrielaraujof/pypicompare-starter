import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { PypicompareAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PypicompareAppComponent, [HTTP_PROVIDERS]);
