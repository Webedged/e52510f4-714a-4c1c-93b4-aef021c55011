import {Component, OnInit} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem, EventsByDate} from "../../models/event-list.models";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
    allEventItems: EventsByDate = {};
    allLocations: string[] = [];

    constructor(public dataRepo: DataRepositoryService) {
    }

    public async ngOnInit(): Promise<void> {
        console.log(this.dataRepo.getSettingFromLS("SETTING_NUMB_COLS"));
        await this.dataRepo.initAllEvents();
        const tmpAllEventItems = this.dataRepo.tmpAllEventItems;
        this.allLocations = this.getAllVenueNamesFromEvents(tmpAllEventItems);
    }

    public handleLocationSetting(ev: EventTarget | any) {
        this.dataRepo.saveSettingInLS("SETTING_FAV_LOCATION", ev.value);
    }

    public handleNumbersOfColsSetting(ev: EventTarget | any) {
        this.dataRepo.saveSettingInLS("SETTING_NUMB_COLS", ev.value);
    }

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