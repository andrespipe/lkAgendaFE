import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { INavLink } from '../../models/main-nav.model';

@Component({
  selector: 'lk-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('toggleMenu', [
      state('open', style({transform: 'rotate(90deg)'})),
      state('close', style({transform: 'rotate(0deg)'})),
      transition('open <=> close', [animate('300ms')]),
    ]),
  ],
})
export class MainNavComponent {

  @Input() menuItems: INavLink[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isSideBarOpen = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {}

  onOpenedStart() {
    this.isSideBarOpen.next(true);
  }

  onClosedStart() {
    this.isSideBarOpen.next(false);
  }
}
