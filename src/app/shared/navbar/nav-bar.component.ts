import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'wavi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  private data: Observable<Array<number>>;
  private values: Array<number> = [];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {}

}