import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2pComponent } from './c2p.component';

describe('C2pComponent', () => {
  let component: C2pComponent;
  let fixture: ComponentFixture<C2pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
