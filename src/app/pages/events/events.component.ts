import {Component, OnInit} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem, EventsByDate} from "../../models/event-list.model";

@Component({
    selector: "app-events",
    templateUrl: "./events.component.html",
    styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
    public eventList: EventsByDate | any[] = {} as EventsByDate;

    constructor(public dataRepo: DataRepositoryService) {
    }

    public async ngOnInit(): Promise<void> {
        await this.dataRepo.initAllEvents();
        console.log(this.dataRepo.allEventItems);
    }

    handleAddCartItem(cartItem: EventItem) {
        this.dataRepo.allCartItems.items.push(cartItem);
        const dateKey = cartItem.date;

        if (dateKey in this.eventList) {
            //@ts-ignore
            this.eventList[dateKey] = this.eventList[dateKey].filter((item: EventItem) => {
                return cartItem._id !== item._id;
            });
        }

        console.log(this.dataRepo.allCartItems);
    }


}
