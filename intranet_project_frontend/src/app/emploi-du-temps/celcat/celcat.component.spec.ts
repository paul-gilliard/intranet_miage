import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelcatComponent } from './celcat.component';

describe('CelcatComponent', () => {
  let component: CelcatComponent;
  let fixture: ComponentFixture<CelcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
