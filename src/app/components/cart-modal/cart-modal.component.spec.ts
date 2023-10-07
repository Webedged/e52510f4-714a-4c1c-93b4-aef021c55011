import {ComponentFixture, TestBed} from "@angular/core/testing";

import {CartModalComponent} from "./cart-modal.component";

describe("CartModalComponent", () => {
    let component: CartModalComponent;
    let fixture: ComponentFixture<CartModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CartModalComponent]
        });
        fixture = TestBed.createComponent(CartModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
