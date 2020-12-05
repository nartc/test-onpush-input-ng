import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'hello-child',
    template: `<h4>Hello child {{name$ | async}}!</h4><h4>{{anotherName}}</h4>`,
    styles: [`h1 {
        font-family: Lato, sans-serif;
    }`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloChildComponent {
    @Input() set name(v: string) {
        this._name$.next(v);
    };

    private _anotherName = 'I will not change';
    @Input() set anotherName(v: string) {
        this._anotherName = v;
    }

    get anotherName() {
        return this._anotherName;
    }

    private _name$ = new Subject<string>();
    name$ = this._name$.asObservable();
}
