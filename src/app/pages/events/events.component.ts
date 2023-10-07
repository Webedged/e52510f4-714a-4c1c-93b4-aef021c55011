import {Component, OnInit} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem} from "../../models/event-list.model";

@Component({
    selector: "app-events",
    templateUrl: "./events.component.html",
    styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
    public eventList: EventItem[] | any[] = [] as EventItem[];

    constructor(private dataRepo: DataRepositoryService) {
    }

    public async ngOnInit(): Promise<void> {
        this.eventList = this.sortDataByDate(await this.dataRepo.getDummyData());
    }

    sortDataByDate(data: EventItem[]): any {
        function groupEventsByDate(events: any[]): { [key: string]: any[] } {
            const groupedEvents: { [key: string]: any[] } = {};

            // Durchlaufe die Events und gruppiere sie nach Datum
            events.forEach((event) => {
                const date = event.date.split("T")[0]; // Extrahiere das Datum ohne Uhrzeit
                if (!groupedEvents[date]) {
                    // Wenn das Datum noch nicht im Objekt existiert, erstelle ein leeres Array dafür
                    groupedEvents[date] = [];
                }
                // Füge das Event zum entsprechenden Datum hinzu
                groupedEvents[date].push(event);
            });

            return groupedEvents;
        }

        return groupEventsByDate(data);
    }
}
