import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropgandaComponent } from './propganda.component';

describe('PropgandaComponent', () => {
  let component: PropgandaComponent;
  let fixture: ComponentFixture<PropgandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropgandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropgandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
