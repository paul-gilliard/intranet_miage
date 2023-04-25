import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieInfoComponent } from './messagerie-info.component';

describe('MessagerieInfoComponent', () => {
  let component: MessagerieInfoComponent;
  let fixture: ComponentFixture<MessagerieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagerieInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagerieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
