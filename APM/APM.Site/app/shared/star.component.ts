import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "ai-star",
    templateUrl: "star.component.html",
    styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges {

    // properties
    maxWidth: number = 86;
    starWidth: number;

    // bound properties
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    // event handler methods
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    // component lifecycle event handler methods
    ngOnChanges(): void {
        this.starWidth = this.rating * this.maxWidth / 5;
    }
}