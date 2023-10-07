import {Component} from "@angular/core";
import {NavigationService} from "../../services/navigation.service";
import {faCalendar, faCog} from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "../../models/navigation.models";
import {Router} from "@angular/router";

@Component({
    selector: "header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
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

    faCog = faCog;
    faCalendar = faCalendar;
    currentUrl: string = "";

    constructor(private navHandler: NavigationService, private router: Router) {
        this.refreshNavigationBar();
    }

    public async navTo(link: string): Promise<void> {
        await this.router.navigate([link]);
        this.refreshNavigationBar();
    }

    private refreshNavigationBar() {
        const currentUrl = this.navHandler.readCurrentPageFromUrl();
        const activeNavItem: NavItem | undefined = this.navItems.find((item: NavItem) => {
            return item.link === currentUrl;
        });

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
