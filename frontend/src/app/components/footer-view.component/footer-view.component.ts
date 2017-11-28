import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizationService } from '../../services/localization.service'

@Component({
    selector: 'app-footer-view',
    templateUrl: './footer-view.component.html',
    styleUrls: ['./footer-view.component.scss']
})
export class FooterViewComponent implements OnInit {

    constructor(public locale: LocalizationService) {}

    ngOnInit() {
    }
}
