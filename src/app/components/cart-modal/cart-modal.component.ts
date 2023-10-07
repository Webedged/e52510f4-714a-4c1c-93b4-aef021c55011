import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {DataRepositoryService} from "../../services/data-repository.service";
import {EventItem} from "../../models/event-list.model";

@Component({
    selector: "app-cart-modal",
    templateUrl: "./cart-modal.component.html",
    styleUrls: ["./cart-modal.component.scss"]
})
export class CartModalComponent implements OnChanges {
    @Input() toggleCart: boolean = false;
    @Output() toggleCartChanged = new EventEmitter<boolean>;

    constructor(public dataRepo: DataRepositoryService) {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
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

            // Überprüfen, ob das cartItem bereits in this.dataRepo.allEventItems[dateKey] vorhanden ist
            //@ts-ignore
            const isCartItemInEventItems = this.dataRepo.allEventItems[dateKey].some((item: EventItem) => {
                return cartItem._id === item._id;
            });

            // Wenn das cartItem nicht in this.dataRepo.allEventItems[dateKey] vorhanden ist, füge es hinzu
            if (!isCartItemInEventItems) {
                //@ts-ignore
                this.dataRepo.allEventItems[dateKey].push(cartItem);
            }
        }
    }
}
