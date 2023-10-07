import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {EventItem} from "../../models/event-list.model";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "event-item",
    templateUrl: "./event-item.component.html",
    styleUrls: ["./event-item.component.scss"]
})
export class EventItemComponent implements OnChanges {
    @Input() item: EventItem = {} as EventItem;
    faPlus = faPlus;

    public ngOnChanges(changes: SimpleChanges): void {

    }
}
