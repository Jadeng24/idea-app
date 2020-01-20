import { Component } from "@angular/core";

@Component({
    selector: 'app-my-ideas',
    templateUrl: './my-ideas.component.html',
    styleUrls: ['./my-ideas.component.css'],
})
export class MyIdeasComponent {
    public myIdea: string = 'Go swimming again';
    public currentIdea: string = '';

    saveIdea() {
        this.currentIdea = this.myIdea;
    }
}
