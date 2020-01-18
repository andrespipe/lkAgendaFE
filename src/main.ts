import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import * as dotEnv from 'dotenv';

import { LKModule } from './lk/lk.module';
import { environment } from './environments/environment';

// dotEnv.config();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(LKModule)
  .catch(err => console.error(err));
