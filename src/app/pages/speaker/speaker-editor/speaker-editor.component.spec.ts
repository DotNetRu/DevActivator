import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerEditorComponent } from './speaker-editor.component';

describe('SpeakerEditorComponent', () => {
  let component: SpeakerEditorComponent;
  let fixture: ComponentFixture<SpeakerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
