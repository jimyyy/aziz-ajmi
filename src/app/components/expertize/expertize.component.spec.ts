import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertizeComponent } from './expertize.component';

describe('ExpertizeComponent', () => {
  let component: ExpertizeComponent;
  let fixture: ComponentFixture<ExpertizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
