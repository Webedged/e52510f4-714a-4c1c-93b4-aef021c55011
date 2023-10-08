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

    public handleRemoveCartItem(cartItem: EventItem) {
        this.dataRepo.allCartItems.items = this.dataRepo.allCartItems.items.filter((item: EventItem) => {
            return cartItem._id !== item._id;
        });

        const dateKey = cartItem.date;
        if (dateKey in this.dataRepo.allEventItems) {
            //@ts-ignore
            this.dataRepo.allEventItems[dateKey] = this.dataRepo.allEventItems[dateKey].filter((item: EventItem) => {
                return cartItem._id !== item._id;
            });

            //@ts-ignore
            const isCartItemInEventItems = this.dataRepo.allEventItems[dateKey].some((item: EventItem) => {
                return cartItem._id === item._id;
            });

            if (!isCartItemInEventItems) {
                //@ts-ignore
                this.dataRepo.allEventItems[dateKey].push(cartItem);
            }
        }
    }
}
