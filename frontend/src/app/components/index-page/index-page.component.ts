import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../../services/localization.service';

@Component({
    selector: 'app-index-page',
    templateUrl: './index-page.component.html',
    styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
    hotTours = [1,2,1,2,3,4,1,2,2,4]

    constructor(public locale: LocalizationService) {}

    ngOnInit() {}
}
