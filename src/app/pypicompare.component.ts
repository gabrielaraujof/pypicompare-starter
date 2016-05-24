import { Component, OnInit } from '@angular/core';

import { PypiPackage, PypiService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'pypicompare-app',
  templateUrl: 'pypicompare.component.html',
  styleUrls: ['pypicompare.component.css'],
  providers: [PypiService]
})
export class PypicompareAppComponent implements OnInit {
  pypiPackage: PypiPackage;

  constructor(private pypiService: PypiService) { }

  ngOnInit() { this.getPackage('pandas'); }

  getPackage(packageName: string) {
    this.pypiService.getPackage(packageName)
      .subscribe(p => this.pypiPackage = p);
  }
}
