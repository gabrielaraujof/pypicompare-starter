import { PypicomparePage } from './app.po';

describe('pypicompare App', function() {
  let page: PypicomparePage;

  beforeEach(() => {
    page = new PypicomparePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pypicompare works!');
  });
});
