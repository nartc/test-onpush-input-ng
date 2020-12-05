import {ChangeDetectionStrategy, Component, ContentChild, Input} from '@angular/core';
import {HelloChildComponent} from "./hello-child.component";

@Component({
    selector: 'hello',
    template: `<h1>Hello {{name}}!</h1>
    <button class="py-2 px-4 shadow rounded bg-blue-500 text-white" (click)="changeSubject()">Update HelloChild [name]
    </button>
    <button class="py-2 px-4 shadow rounded bg-blue-500 text-white" (click)="change()">Update HelloChild [name] (won't
        work)
    </button>
    <ng-content></ng-content>`,
    styles: [`h1 {
        font-family: Lato, sans-serif;
    }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
    @Input() name: string;
    @ContentChild(HelloChildComponent) child: HelloChildComponent;

    changeSubject() {
        this.child.name = 'updated from parent';
    }

    change() {
        this.child.anotherName = 'this is a stubborn child'
    }
}
