import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';
import { BlockUiService } from './core/block-ui/block-ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
    private blockUiService: BlockUiService) { }

  ngOnInit() {
    this.router.events.subscribe((route: RouterEvent) => {
      if (route instanceof NavigationStart) {
        this.blockUiService.isLoading('body', true);
      }
      if (route instanceof NavigationEnd
        || route instanceof NavigationCancel
        || route instanceof NavigationError) {
        this.blockUiService.isLoading('body', false);
      }
    });
  }
}
