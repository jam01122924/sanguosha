export class SanguoshaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sanguosha-app h1')).getText();
  }
}
