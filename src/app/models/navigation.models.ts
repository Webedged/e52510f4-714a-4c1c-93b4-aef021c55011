import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
    text: string;
    icon: IconDefinition;
    link: string;
    active: boolean;
}