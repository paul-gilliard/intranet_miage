import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageriePanelGaucheComponent } from './messagerie-panel-gauche.component';

describe('MessageriePanelGaucheComponent', () => {
  let component: MessageriePanelGaucheComponent;
  let fixture: ComponentFixture<MessageriePanelGaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageriePanelGaucheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageriePanelGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
