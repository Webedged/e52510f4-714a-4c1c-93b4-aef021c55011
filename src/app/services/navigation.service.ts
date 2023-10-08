import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class NavigationService {
    constructor() {
    }

    readCurrentPageFromUrl(): string {
        return window.location.pathname;
    }
}
