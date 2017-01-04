import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {SharedNavigationService} from './services/SharedNavigationService';
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);