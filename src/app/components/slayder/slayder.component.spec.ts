import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlayderComponent } from './slayder.component';

describe('SlayderComponent', () => {
  let component: SlayderComponent;
  let fixture: ComponentFixture<SlayderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlayderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlayderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
