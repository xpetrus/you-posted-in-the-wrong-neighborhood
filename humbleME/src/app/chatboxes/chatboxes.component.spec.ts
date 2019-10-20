import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxesComponent } from './chatboxes.component';

describe('ChatboxesComponent', () => {
  let component: ChatboxesComponent;
  let fixture: ComponentFixture<ChatboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
