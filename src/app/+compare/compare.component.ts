import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, RouteSegment } from '@angular/router';

import { PypiPackage, PypiService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ppc-compare',
  templateUrl: 'compare.component.html',
  styleUrls: ['compare.component.css'],
  providers: [PypiService, ROUTER_PROVIDERS]
})
export class CompareComponent {
  pypiPackage: PypiPackage;

  constructor(private routeSegment: RouteSegment, private pypiService: PypiService) {
    let selectedPackage: string = routeSegment.getParam('search').split(',')[0];
    this.getPackage(selectedPackage);
  }

  getPackage(packageName: string) {
    this.pypiService.getPackage(packageName)
      .subscribe(p => this.pypiPackage = p);
  }
}
