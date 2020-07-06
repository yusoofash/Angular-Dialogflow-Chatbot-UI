import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIntentComponent } from './show-intent.component';

describe('ShowIntentComponent', () => {
  let component: ShowIntentComponent;
  let fixture: ComponentFixture<ShowIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
