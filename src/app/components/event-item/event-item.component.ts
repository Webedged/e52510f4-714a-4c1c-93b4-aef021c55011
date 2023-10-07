import {Component, EventEmitter, Input, Output} from "@angular/core";
import {EventItem} from "../../models/event-list.model";
import {faClose, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "event-item",
    templateUrl: "./event-item.component.html",
    styleUrls: ["./event-item.component.scss"]
})
export class EventItemComponent {
    @Input() eventItem: EventItem = {} as EventItem;
    @Input() isEventList: boolean | undefined;
    @Output() cartItemAdd: EventEmitter<EventItem> = new EventEmitter<EventItem>;
    @Output() cartItemRemove: EventEmitter<EventItem> = new EventEmitter<EventItem>;
    faPlus = faPlus;
    faClose = faClose;

    addCartItem(item: EventItem) {
        this.cartItemAdd.emit(item);
    }

    public removeCartItem(item: EventItem): void {
        this.cartItemRemove.emit(item);
    }
}
