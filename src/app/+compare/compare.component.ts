import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, RouteSegment } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PypiPackage, PypiService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ppc-compare',
  templateUrl: 'compare.component.html',
  styleUrls: ['compare.component.css'],
  providers: [PypiService, ROUTER_PROVIDERS]
})
export class CompareComponent {
  packages: Observable<PypiPackage[]>;

  constructor(private routeSegment: RouteSegment, private pypiService: PypiService) {
    let selectedPackages: Array<string> = routeSegment.getParam('search').split(',');
    if (selectedPackages.length > 3) {
      selectedPackages = selectedPackages.slice(0, 3);
    }
    this.packages = this.pypiService.getPackages(selectedPackages);
  }
}
