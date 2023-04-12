import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveDocumentComponent } from './drive-document.component';

describe('DocumentComponent', () => {
  let component: DriveDocumentComponent;
  let fixture: ComponentFixture<DriveDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
