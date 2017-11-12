// @angular
import { ImportModule } from './import.module';
import { NgModule } from '@angular/core';

// other modules
import { AppRoutingModule } from './app-routing.module';

// services
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { WindowObj } from './services/window.service';
import { LocalizationService } from './services/localization.service';
import { ToasterService } from './services/toastr.service';

// components
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { HeaderViewComponent } from './components/header-view/header-view.component';

@NgModule({
    imports: [
        ImportModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        HeaderViewComponent,
        IndexPageComponent,
    ],
    providers: [
        HttpService,
        WindowObj,
        AuthService,
        LocalizationService,
        ToasterService,
    ],
    bootstrap: [AppComponent]

})
export class AppModule {}
