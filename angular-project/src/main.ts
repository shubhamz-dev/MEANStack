// logic which helps to exe module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

/*

1. index.   -> 2. main.ts  -> 3. app.module.ts -> 4. app.comp.ts / html /css 
*/
