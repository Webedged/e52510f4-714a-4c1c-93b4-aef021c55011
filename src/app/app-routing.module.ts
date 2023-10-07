import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./pages/events/events.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/events",
        pathMatch: "full",
    },
    {
        path: "events",
        component: EventsComponent,
    },
    {
        path: "settings",
        component: SettingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
