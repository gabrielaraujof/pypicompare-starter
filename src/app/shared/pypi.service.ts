import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';

import { PypiPackage } from './pypi-package.model';

@Injectable()
export class PypiService {
  private pypiUrl: string = 'http://pypi.python.org/pypi';

  constructor(private http: Http) { }

  getPackage(selectedPackage: string): Observable<PypiPackage> {
    return this.http.get(`${this.pypiUrl}/${selectedPackage}/json`)
      .map((res: Response) => <PypiPackage>res.json().info)
      .catch(this.handleError);
  }

  getPackages(packageNames: Array<string>): Observable<PypiPackage> {
    return packageNames.reduce<Observable<PypiPackage>>(
      (acumulated, currentValue) => {
        return acumulated.concat(this.http.get(`${this.pypiUrl}/${currentValue}/json`)
          .map((res: Response) => <PypiPackage>res.json().info));
      }, Observable.empty())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
