import {Component} from "@angular/core";
import {DataRepositoryService} from "./services/data-repository.service";
import {EventItem, EventsByDate} from "./models/event-list.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "e52510f4-714a-4c1c-93b4-aef021c55011";
    toggleCart: boolean = false;

    constructor(private dataRepo: DataRepositoryService) {
    }

    handleToggleCart(ev: boolean) {
        this.toggleCart = ev;
    }

    public handleSearchBarInput(searchText: string): void {
        // Convert the search text to lowercase for case-insensitive search
        const searchTerm = searchText.toLowerCase().trim();

        // Initialize a new empty EventsByDate structure
        const filteredEventsByDate: EventsByDate = {};

        // Loop through the original EventsByDate structure
        for (const dateKey in this.dataRepo.tmpAllEventItems) {
            if (this.dataRepo.tmpAllEventItems.hasOwnProperty(dateKey)) {
                // Filter events for the current date and add them to the new structure
                const eventsForDate = this.dataRepo.tmpAllEventItems[dateKey].filter((event: EventItem) => {
                    return event.title.toLowerCase().includes(searchTerm);
                });

                if (eventsForDate.length > 0) {
                    // Add the filtered events for the current date to the new structure
                    filteredEventsByDate[dateKey] = eventsForDate;
                }
            }
        }

        // Now, filteredEventsByDate contains events that match the search criteria
        // and is organized by date keys.
        this.dataRepo.allEventItems = filteredEventsByDate;
    }


}
