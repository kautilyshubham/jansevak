import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrivenceComponent } from './grivence.component';

describe('GrivenceComponent', () => {
  let component: GrivenceComponent;
  let fixture: ComponentFixture<GrivenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrivenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrivenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
