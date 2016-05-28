import { Component } from '@angular/core';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  Router,
  Routes
} from '@angular/router';

import { CompareComponent } from './+compare';

@Component({
  moduleId: module.id,
  selector: 'pypicompare-app',
  templateUrl: 'pypicompare.component.html',
  styleUrls: ['pypicompare.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  { path: '/compare/:search', component: CompareComponent }
])
export class PypicompareAppComponent {

  constructor(private router: Router) { }
}
