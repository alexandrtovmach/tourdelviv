/// <reference path="../../../typings/webapi.d.ts" />
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { WindowObj } from './services/window.service';
import { LocalizationService } from './services/localization.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    isIndexPage: boolean = false;

    constructor(public locale: LocalizationService) {}

    ngOnInit() {
        this.isIndexPage = (window.location.pathname === '/');
        this.locale.initLocal();
    }
}
