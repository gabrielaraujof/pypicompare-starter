import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
