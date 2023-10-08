import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {EventsComponent} from "./pages/events/events.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {HeaderComponent} from "./components/header/header.component";
import {EventItemComponent} from "./components/event-item/event-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CartModalComponent} from "./components/cart-modal/cart-modal.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        EventsComponent,
        SettingsComponent,
        HeaderComponent,
        EventItemComponent,
        CartModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
