export class PypicomparePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pypicompare-app h1')).getText();
  }
}
