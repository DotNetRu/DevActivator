import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkEditorComponent } from './talk-editor.component';

describe('TalkEditorComponent', () => {
  let component: TalkEditorComponent;
  let fixture: ComponentFixture<TalkEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
