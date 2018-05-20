import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
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
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        this.blockUiService.isLoading('body', true);
      }
      if (route instanceof NavigationEnd) {
        this.blockUiService.isLoading('body', false);
      }
    });
  }
}
