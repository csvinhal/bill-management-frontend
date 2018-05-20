import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from '@core';

import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';
import { SignupService } from './signup.service';
import { TranslateServiceStub } from '../core/translate/translate-service-stub';
import { TermsConditionsModule } from './terms-conditions/terms-conditions.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateHttpLoader,
            useClass: TranslateFakeLoader
          }
        }),
        SharedModule,
        CoreModule,
        TermsConditionsModule
      ],
      declarations: [SignupComponent],
      providers: [SignupService, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
