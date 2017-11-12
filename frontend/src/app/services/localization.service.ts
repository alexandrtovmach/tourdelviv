import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()


export class LocalizationService {
    currentLang: string;
    langPack: any;
    defaultLang = 'ua';
    availableLang = ['ua', 'ru', 'en'];


    constructor(private httpService: HttpService) {}

    initLocal(lang?) {
        if (lang) {
            this.currentLang = lang
            return this.sendReq(lang)
        }
        if (!window.navigator.language) {
            if (window.navigator.languages && window.navigator.languages[1]) {
                this.currentLang = window.navigator.languages[1].toLowerCase()
                return this.sendReq(this.currentLang)
            }
        } else {
            this.currentLang = window.navigator.language
            return this.sendReq(this.currentLang)
        }
        return this.sendReq(this.defaultLang)
    }

    sendReq(lang) {
        lang = this.availableLang.includes(lang)? lang: 'ua';
        this.httpService.sendRequest({ method: 'GET', url: `/langpack/${lang}.json` })
            .then((langPack) => {
                this.langPack = langPack;
            })
            .catch((err) => {
                console.error(err);
            })
    }
}
