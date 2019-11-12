import { Component } from '@angular/core';
import { TranslateService } from 'src/lk/modules/translate/services/translate.service';
import { Languages } from 'src/lk/modules/translate/models/languages.model';
import { BehaviorSubject } from 'rxjs';
import { INavLink } from 'src/lk/modules/ui-controls/models/main-nav.model';

@Component({
  selector: 'lk-root',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LKComponent {
  title = 'lkAgendaFE';
  isLanguageLoaded = new BehaviorSubject<boolean>(false);
  routes: INavLink[] = [
    {
      icon: 'date_range',
      path: 'agenda',
      title: 'routes.agenda',
    },
    {
      icon: 'vibration',
      path: 'activities',
      title: 'routes.activities',
    },
    {
      icon: 'near_me',
      path: 'locations',
      title: 'routes.locations',
    },
    {
      icon: 'person_pin',
      path: 'staff',
      title: 'routes.staff',
    },
    {
      icon: 'bar_chart',
      path: 'reports',
      title: 'routes.reports',
    }
  ];

  constructor(private translateService: TranslateService) {
    this.initSubscribes();
    this.loadLanguageResources();
  }

  initSubscribes() {
    this.translateService
      .langInfo
      .subscribe(lang => this.isLanguageLoaded.next(!!lang));
  }

  loadLanguageResources() {
    this.translateService
      .use(Languages.enUS);
  }
}
