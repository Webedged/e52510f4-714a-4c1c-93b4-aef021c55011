import {Component, EventEmitter, Input, Output} from "@angular/core";
import {EventItem} from "../../models/event-list.models";
import {faClose, faLocationDot, faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "event-item",
    templateUrl: "./event-item.component.html",
    styleUrls: ["./event-item.component.scss"]
})
export class EventItemComponent {
    @Input() eventItem: EventItem = {} as EventItem; // Eingabeparameter für Veranstaltungsdaten
    @Input() isEventList: boolean | undefined; // Eingabeparameter, um festzustellen, ob sich das Element in der Event-Liste befindet
    @Output() cartItemAdd = new EventEmitter<EventItem>(); // Ausgabeparameter für das Hinzufügen zum Warenkorb-Ereignis
    @Output() cartItemRemove = new EventEmitter<EventItem>(); // Ausgabeparameter für das Entfernen aus dem Warenkorb-Ereignis

    faPlus = faPlus; // Icon für das Hinzufügen zum Warenkorb
    faClose = faClose; // Icon für das Entfernen aus dem Warenkorb
    faLocationDot = faLocationDot; // Icon für den Veranstaltungsort

    // Methode zum Hinzufügen eines Elements zum Warenkorb und Auslösen des Ereignisses
    addCartItem(item: EventItem) {
        this.cartItemAdd.emit(item);
    }

    // Methode zum Entfernen eines Elements aus dem Warenkorb und Auslösen des Ereignisses
    removeCartItem(item: EventItem): void {
        this.cartItemRemove.emit(item);
    }
}
