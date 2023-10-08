import {Component, EventEmitter, Input, Output} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem} from "../../models/event-list.models";

@Component({
    selector: "app-cart-modal",
    templateUrl: "./cart-modal.component.html",
    styleUrls: ["./cart-modal.component.scss"]
})
export class CartModalComponent {
    @Input() toggleCart = false;
    @Output() toggleCartChanged = new EventEmitter<boolean>();

    constructor(public dataRepo: DataRepositoryService) {
    }

    // Handler-Funktion zum Entfernen eines Elements aus dem Warenkorb
    public handleRemoveCartItem(cartItem: EventItem) {
        // Filtere das Element aus der Warenkorbliste
        this.dataRepo.allCartItems.items = this.dataRepo.allCartItems.items.filter((item: EventItem) => {
            return cartItem._id !== item._id;
        });

        const dateKey = cartItem.date;

        // Überprüfe, ob das Datum im Event-Objekt vorhanden ist
        if (dateKey in this.dataRepo.allEventItems) {
            //@ts-ignore
            // Filtere das Element auch aus den Event-Items für das Datum
            this.dataRepo.allEventItems[dateKey] = this.dataRepo.allEventItems[dateKey].filter((item: EventItem) => {
                return cartItem._id !== item._id;
            });

            //@ts-ignore
            // Überprüfe, ob das Element im Event-Objekt vorhanden ist
            const isCartItemInEventItems = this.dataRepo.allEventItems[dateKey].some((item: EventItem) => {
                return cartItem._id === item._id;
            });

            // Wenn das Element nicht im Event-Objekt ist, füge es hinzu
            if (!isCartItemInEventItems) {
                //@ts-ignore
                this.dataRepo.allEventItems[dateKey].push(cartItem);
            }
        }
    }
}