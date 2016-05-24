import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PypicompareAppComponent } from '../app/pypicompare.component';

beforeEachProviders(() => [PypicompareAppComponent]);

describe('App: Pypicompare', () => {
  it('should create the app',
      inject([PypicompareAppComponent], (app: PypicompareAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'pypicompare works!\'',
  //     inject([PypicompareAppComponent], (app: PypicompareAppComponent) => {
  //   expect(app.title).toEqual('pypicompare works!');
  // }));
});
