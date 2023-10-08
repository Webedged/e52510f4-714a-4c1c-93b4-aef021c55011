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
        // Die Spaltenanzahl wird aus den lokalen Einstellungen geladen
        this.columnCount = parseInt(<string>dataRepo.getSettingFromLS("SETTING_NUMB_COLS"), 10);
    }

    public async ngOnInit(): Promise<void> {
        // Initialisierung aller Events beim Start der Komponente
        await this.dataRepo.initAllEvents();
        console.log(this.dataRepo.allEventItems);
    }

    // Methode zum Hinzufügen eines Artikels zum Warenkorb
    handleAddCartItem(cartItem: EventItem) {
        // Füge das Event zum Warenkorb hinzu
        this.dataRepo.allCartItems.items.push(cartItem);
        const dateKey = cartItem.date;

        if (dateKey in this.dataRepo.allEventItems) {
            //@ts-ignore
            // Filtere das Event aus der Event-Liste für dieses Datum
            this.dataRepo.allEventItems[dateKey] = this.dataRepo.allEventItems[dateKey].filter((item: EventItem) => {
                return cartItem._id !== item._id;
            });
        }
    }

    // Methode zur Berechnung der Breite einer Spalte basierend auf der Anzahl der Spalten
    public getColumnWidth(columnCount: number): string {
        if (!columnCount) {
            columnCount = 4; // Standardanzahl von Spalten
        }
        return (100 / columnCount) + "%";
    }
}
