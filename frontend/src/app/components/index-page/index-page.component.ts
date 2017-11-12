import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../../services/localization.service';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

    constructor(public locale: LocalizationService) {

    }

    ngOnInit() {}
}
