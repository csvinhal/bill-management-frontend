import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver) {}

  folders = [{ name: 'Folders', updated: 'yes' }, { name: 'Folders 1', updated: 'yes' }, { name: 'Folders 2', updated: 'yes' }];
  notes = [{ name: 'Notes', updated: 'yes' }, { name: 'Notes 1', updated: 'yes' }, { name: 'Notes 2', updated: 'yes' }];
}
