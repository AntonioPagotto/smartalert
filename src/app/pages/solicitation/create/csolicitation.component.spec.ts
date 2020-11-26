import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSolicitationComponent } from './csolicitation.component';

describe('SolicitationComponent', () => {
  let component: CSolicitationComponent;
  let fixture: ComponentFixture<CSolicitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSolicitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
