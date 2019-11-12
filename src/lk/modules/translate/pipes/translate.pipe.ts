import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(key: any): any {
    if (this.translateService && this.translateService.langInfo.value) {
      try {
        const data = this.translateService.langInfo.value;
        return data[key];
      } catch (error) {
        console.error(error);
      }
    }
    return key;
  }
}
