import {Component, EventEmitter, Input, Output} from "@angular/core";
import {EventItem} from "../../models/event-list.models";
import {faClose, faLocationDot, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "event-item",
    templateUrl: "./event-item.component.html",
    styleUrls: ["./event-item.component.scss"]
})
export class EventItemComponent {
    @Input() eventItem: EventItem = {} as EventItem;
    @Input() isEventList: boolean | undefined;
    @Output() cartItemAdd = new EventEmitter<EventItem>();
    @Output() cartItemRemove = new EventEmitter<EventItem>();
    faPlus = faPlus;
    faClose = faClose;
    faLocationDot = faLocationDot;

    addCartItem(item: EventItem) {
        this.cartItemAdd.emit(item);
    }

    removeCartItem(item: EventItem): void {
        this.cartItemRemove.emit(item);
    }
}