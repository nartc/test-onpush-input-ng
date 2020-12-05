import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HelloChildComponent} from './hello-child.component';
import {HelloComponent} from "./hello.component";

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        HelloChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
