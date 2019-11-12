import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LKRoutingModule } from './lk-routing.module';
import { LKComponent } from './components/lk/lk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiControlsModule } from './modules/ui-controls/ui-controls.module';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { TranslateModule } from './modules/translate/translate.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LKComponent,
    MainPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LKRoutingModule,
    TranslateModule,
    UiControlsModule,
  ],
  bootstrap: [LKComponent],
})
export class LKModule { }
