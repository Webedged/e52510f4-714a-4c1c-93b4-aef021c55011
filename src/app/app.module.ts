import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {EventsComponent} from "./pages/events/events.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {HeaderComponent} from "./components/header/header.component";
import {EventItemComponent} from "./components/event-item/event-item.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SettingsComponent,
    HeaderComponent,
    EventItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
