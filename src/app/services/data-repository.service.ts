import {Injectable} from "@angular/core";
import {EventItem, EventsByDate} from "../models/event-list.models";
import {ShoppingCart} from "../models/shopping-cart.models";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataRepositoryService {
    // Initialisiere die Eigenschaften mit den richtigen Typen und leeren Werten
    allEventItems: EventsByDate = {};
    tmpAllEventItems: EventsByDate = {};
    allCartItems: ShoppingCart = {items: []};

    constructor(private http: HttpClient) {
    }

    public async initAllEvents(force?: boolean): Promise<void> {
        // Überprüfe, ob allEventItems leer ist
        if (Object.keys(this.allEventItems).length === 0 || force) {
            const data: EventsByDate = this.sortDataByDate(await this.getApiData());
            const locationName: string | null = <string>this.getSettingFromLS("SETTING_FAV_LOCATION");

            // Setze die Werte für tmpAllEventItems und allCartItems
            this.tmpAllEventItems = data;
            this.allCartItems.items = [];

            if (!locationName) {
                this.allEventItems = data;
            } else {
                this.allEventItems = this.filterEventsByVenueName(data, locationName);
            }
        }
    }

    // Gib den richtigen Rückgabetyp für sortDataByDate an
    sortDataByDate(events: EventItem[]): EventsByDate {
        const groupedEvents: EventsByDate = {};

        events.forEach((event) => {
            const date = event.date.split("T")[0];
            event.date = date;
            if (!groupedEvents[date]) {
                groupedEvents[date] = [];
            }
            groupedEvents[date].push(event);
        });

        return groupedEvents;
    }

    public async saveSettingInLS(settingName: string, value: boolean | string): Promise<void> {
        try {
            const serializedValue = typeof value === "string" ? value : JSON.stringify(value);
            localStorage.setItem(settingName, serializedValue);
        } catch (error) {
            console.error("Fehler beim Speichern der Einstellung im Local Storage:", error);
        }

        await this.initAllEvents(true);
    }

    public getSettingFromLS(settingName: string): boolean | string | null {
        try {
            const serializedValue = localStorage.getItem(settingName);
            if (serializedValue !== null) {
                return serializedValue.startsWith("{") || serializedValue.startsWith("[")
                    ? JSON.parse(serializedValue)
                    : serializedValue;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Fehler beim Abrufen der Einstellung aus dem Local Storage:", error);
            return null;
        }
    }

    public async deleteSettingFromLS(settingName: string): Promise<void> {
        try {
            localStorage.removeItem(settingName);
        } catch (error) {
            console.error("Fehler beim Löschen der Einstellung aus dem Local Storage:", error);
        }

        await this.initAllEvents(true);

    }

    private async getApiData(): Promise<EventItem[]> {
        const apiUrl = "https://teclead-ventures.github.io/data/london-events.json";
        try {
            const resp = await firstValueFrom(this.http.get(apiUrl)) as EventItem[];
            return resp;
        } catch (e) {
            console.error("Fehler beim Abrufen der API-Daten:", e);
            return [];
        }
    }

    private filterEventsByVenueName(events: EventsByDate, locationName: string): EventsByDate {
        const filteredEvents: EventsByDate = {};

        for (const dateKey in events) {
            if (events.hasOwnProperty(dateKey)) {
                const eventsForDate = events[dateKey];
                const filteredEventsForDate: EventItem[] = [];

                for (const event of eventsForDate) {
                    if (event.venue.name === locationName) {
                        filteredEventsForDate.push(event);
                    }
                }

                if (filteredEventsForDate.length > 0) {
                    filteredEvents[dateKey] = filteredEventsForDate;
                }
            }
        }

        return filteredEvents;
    }
}