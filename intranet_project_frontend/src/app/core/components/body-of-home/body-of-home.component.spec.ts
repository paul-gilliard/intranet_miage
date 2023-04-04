import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOfHomeComponent } from './body-of-home.component';

describe('BodyOfHomeComponent', () => {
  let component: BodyOfHomeComponent;
  let fixture: ComponentFixture<BodyOfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyOfHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyOfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
