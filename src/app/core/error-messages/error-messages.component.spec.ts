import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';

import { ErrorMessagesComponent } from './error-messages.component';

describe('ErrorMessagesComponent', () => {
  let component: ErrorMessagesComponent;
  let fixture: ComponentFixture<ErrorMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessagesComponent);
    component = fixture.componentInstance;

    component.control = new FormControl(
      null,
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(10)
      ])
    );

    component.errors = {
      required: 'O campo é obrigatório.',
      min: 'O valor deve ser maior que 0.',
      max: 'O valor deve ser menor que 100.'
    };

    fixture.componentInstance.messages = fixture.componentInstance.errorMessage;

    component.control.markAsTouched();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a error', () => {
    expect(
      fixture.nativeElement.querySelectorAll('.form-control-feedback').length
    ).toBe(1);
  });

  it('should show two errors', () => {
    component.control.setErrors([{ required: true }, { min: true }]);

    fixture.detectChanges();
    fixture.whenRenderingDone().then(() => {
      expect(
        fixture.nativeElement.querySelectorAll('.form-control-feedback').length
      ).toBe(2);
    });
  });

  it('should show three errors', () => {
    component.control.setErrors([
      { required: true },
      { min: true },
      { max: true }
    ]);

    fixture.detectChanges();
    fixture.whenRenderingDone().then(() => {
      expect(
        fixture.nativeElement.querySelectorAll('.form-control-feedback').length
      ).toBe(3);
    });
  });

  it('should show required error', () => {
    expect(
      fixture.nativeElement.querySelectorAll('#error-0')[0].innerText
    ).toBe('O campo é obrigatório.');
  });

  it('should show min error', () => {
    component.control.setValue(-1);

    fixture.detectChanges();
    fixture.whenRenderingDone().then(() => {
      expect(
        fixture.nativeElement.querySelectorAll('#error-0')[0].innerText
      ).toBe('O valor deve ser maior que 0.');
    });
  });

  it('should show max error', () => {
    component.control.setValue(101);

    fixture.detectChanges();
    fixture.whenRenderingDone().then(() => {
      expect(
        fixture.nativeElement.querySelectorAll('#error-0')[0].innerText
      ).toBe('O valor deve ser menor que 100.');
    });
  });

  it('shouldnt throw error', () => {
    component.control.setErrors(null);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelectorAll('#error-0')[0]
    ).toBeUndefined();
  });
});
