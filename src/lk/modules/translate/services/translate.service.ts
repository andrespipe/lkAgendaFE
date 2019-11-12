import { Injectable } from '@angular/core';
import { Languages } from '../models/languages.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslateService {

  baseURL = 'assets/i18n';
  currentLang = new BehaviorSubject<Languages>(undefined);
  langInfo = new BehaviorSubject<{}>(undefined);
  loadedLangs = new Map<Languages, {}>();

  constructor(private http: HttpClient) {}

  use(lang: Languages): BehaviorSubject<{}> {
    const { currentLang, loadedLangs, langInfo, baseURL } = this;
    currentLang.next(lang);
    if (loadedLangs.has(lang)) {
      const loadedLang = loadedLangs.get(lang);
      langInfo.next(loadedLang);
    } else {
      const url =  `${baseURL}/${currentLang.value || Languages.enUS}.json`;
      this.getLang(url, lang);
    }
    return langInfo;
  }

  private getLang(url: string, lang: Languages) {
    const { http, loadedLangs, langInfo } = this;
    http
      .get(url)
      .subscribe(
        ans => {
          loadedLangs.set(lang, ans);
          langInfo.next(ans);
        },
        error => {
          langInfo.next({});
          console.error(error);
        });
  }
}
