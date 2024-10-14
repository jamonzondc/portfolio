import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardButtonWrapperComponent } from './clipboard-button-wrapper.component';

describe('ClipboardButtonWrapperComponent', () => {
  let component: ClipboardButtonWrapperComponent;
  let fixture: ComponentFixture<ClipboardButtonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipboardButtonWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipboardButtonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
