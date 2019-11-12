import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { TranslateModule } from '../translate/translate.module';
import { RouterModule } from '@angular/router';

const components = [
  MainNavComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    TranslateModule,
  ]
})
export class UiControlsModule { }
