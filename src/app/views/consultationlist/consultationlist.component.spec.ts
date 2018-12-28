import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationlistComponent } from './consultationlist.component';

describe('ConsultationlistComponent', () => {
  let component: ConsultationlistComponent;
  let fixture: ComponentFixture<ConsultationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
