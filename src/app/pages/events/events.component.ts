import {Component, OnInit} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem} from "../../models/event-list.models";

@Component({
    selector: "app-events",
    templateUrl: "./events.component.html",
    styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit {
    columnCount: number = 0;

    constructor(public dataRepo: DataRepositoryService) {
        this.columnCount = parseInt(<string>dataRepo.getSettingFromLS("SETTING_NUMB_COLS"), 10);
    }

    public async ngOnInit(): Promise<void> {
        await this.dataRepo.initAllEvents();
        console.log(this.dataRepo.allEventItems);
    }

    handleAddCartItem(cartItem: EventItem) {
        this.dataRepo.allCartItems.items.push(cartItem);
        const dateKey = cartItem.date;

        if (dateKey in this.dataRepo.allEventItems) {
            //@ts-ignore
            this.dataRepo.allEventItems[dateKey] = this.dataRepo.allEventItems[dateKey].filter((item: EventItem) => {
                return cartItem._id !== item._id;
            });
        }
    }

    public getColumnWidth(columnCount: number): string {
        if (!columnCount) {
            columnCount = 4;
        }
        return (100 / columnCount) + "%";
    }
}
