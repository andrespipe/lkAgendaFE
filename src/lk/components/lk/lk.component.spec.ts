import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LKComponent } from './lk.component';

describe('LKComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LKComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LKComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lkAgendaFE'`, () => {
    const fixture = TestBed.createComponent(LKComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lkAgendaFE');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LKComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('lkAgendaFE app is running!');
  });
});
