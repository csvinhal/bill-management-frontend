import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatExpansionModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { MainNavComponent } from './main-nav.component';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(
    fakeAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          RouterTestingModule,
          // Translate
          TranslateModule.forRoot(),
          // Angular material
          MatExpansionModule,
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatToolbarModule,
        ],
        declarations: [MainNavComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(MainNavComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
