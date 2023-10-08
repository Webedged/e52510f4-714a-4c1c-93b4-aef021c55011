import {Component, EventEmitter, Output} from "@angular/core";
import {NavigationService} from "../../services/navigation.service";
import {faCalendar, faCog, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "../../models/navigation.models";
import {Router} from "@angular/router";
import {DataRepositoryService} from "../../services/data-repository.service";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    // Array von Navigationspunkten
    navItems: NavItem[] = [
        {
            text: "Events",
            icon: faCalendar,
            link: "/events",
            active: false
        },
        {
            text: "Einstellungen",
            icon: faCog,
            link: "/settings",
            active: false
        },
    ];

    // Ereignisemitter für den Warenkorbwechsel und die Suche
    @Output() cartToggleChanged = new EventEmitter<boolean>();
    @Output() searchBarInputTriggered = new EventEmitter<string>();

    // FontAwesome-Icons
    faCog = faCog;
    faCalendar = faCalendar;

    // Aktuelle URL der Seite
    currentUrl: string = "";

    // Zustand des Warenkorbs
    cartToggle = false;

    // FontAwesome-Icon für den Warenkorb
    protected readonly faShoppingCart = faShoppingCart;

    constructor(private navHandler: NavigationService, private router: Router, public dataRepo: DataRepositoryService) {
        this.refreshNavigationBar();
    }

    // Navigiere zu einer anderen Seite
    public async navTo(link: string): Promise<void> {
        await this.router.navigate([link]);
        this.refreshNavigationBar();
    }

    // Ändere den Zustand des Warenkorbs
    public toggleCart(toggle: boolean) {
        this.cartToggleChanged.emit(toggle);
    }

    // Behandlung der Sucheingabe im Textfeld
    public searchInputFieldHandler(ev: Event): void {
        if (ev.target instanceof HTMLInputElement) {
            const value = ev.target.value;
            this.searchBarInputTriggered.emit(value);
        }
    }

    // Aktualisiere die Navigationsleiste basierend auf der aktuellen URL
    private refreshNavigationBar() {
        const currentUrl = this.navHandler.readCurrentPageFromUrl();
        const activeNavItem: NavItem | undefined = this.navItems.find((item: NavItem) => {
            return item.link === currentUrl;
        });

        if (currentUrl === "/") {
            this.navItems[0].active = true;
        }

        if (activeNavItem) {
            activeNavItem.active = true;
            // Setze alle anderen Elemente auf active = false
            for (const item of this.navItems) {
                if (item !== activeNavItem) {
                    item.active = false;
                }
            }
        }
    }
}
