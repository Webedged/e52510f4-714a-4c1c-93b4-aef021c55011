import {Component, OnInit} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem, EventsByDate} from "../../models/event-list.models";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
    // Initialisierung von Variablen
    allEventItems: EventsByDate = {};
    allLocations: string[] = [];

    constructor(public dataRepo: DataRepositoryService) {
    }

    public async ngOnInit(): Promise<void> {
        // Konsolenausgabe der Einstellung "SETTING_NUMB_COLS" aus dem Local Storage
        console.log(this.dataRepo.getSettingFromLS("SETTING_NUMB_COLS"));

        // Initialisierung aller Events und Speicherung in tmpAllEventItems
        await this.dataRepo.initAllEvents();
        const tmpAllEventItems = this.dataRepo.tmpAllEventItems;

        // Extrahieren und Speichern der Veranstaltungsorte aus den Events
        this.allLocations = this.getAllVenueNamesFromEvents(tmpAllEventItems);
    }

    // Behandlung der Veranstaltungsort-Einstellung
    public async handleLocationSetting(ev: EventTarget | any) {
        await this.dataRepo.saveSettingInLS("SETTING_FAV_LOCATION", ev.value);
    }

    // Behandlung der Anzahl der Spalten-Einstellung
    public async handleNumbersOfColsSetting(ev: EventTarget | any) {
        await this.dataRepo.saveSettingInLS("SETTING_NUMB_COLS", ev.value);
    }

    // Extrahieren aller Veranstaltungsortnamen aus den Events
    private getAllVenueNamesFromEvents(eventsByDate: EventsByDate): string[] {
        const venueNamesSet = new Set<string>();

        for (const date in eventsByDate) {
            if (eventsByDate.hasOwnProperty(date)) {
                const events = eventsByDate[date];
                events.forEach((event: EventItem) => {
                    venueNamesSet.add(event.venue.name);
                });
            }
        }

        return Array.from(venueNamesSet);
    }
}
