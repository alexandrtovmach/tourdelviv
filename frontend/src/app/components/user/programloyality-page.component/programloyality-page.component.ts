import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../../../services/localization.service'

@Component({
    selector: 'app-programloyality-page',
    templateUrl: './programloyality-page.component.html',
    styleUrls: ['./programloyality-page.component.scss']
})
export class ProgramLoyalityComponent implements OnInit {

    constructor(public locale: LocalizationService) {}

    ngOnInit() {}

    changeLang(lang) {
        this.locale.initLocal(lang);
    }
}
