import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionMessageComponent } from './reception-message.component';

describe('ReceptionMessageComponent', () => {
  let component: ReceptionMessageComponent;
  let fixture: ComponentFixture<ReceptionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
