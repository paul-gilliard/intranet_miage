import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieDiscussionComponent } from './messagerie-discussion.component';

describe('MessagerieDiscussionComponent', () => {
  let component: MessagerieDiscussionComponent;
  let fixture: ComponentFixture<MessagerieDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagerieDiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagerieDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
