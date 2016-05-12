import { SanguoshaPage } from './app.po';

describe('sanguosha App', function() {
  let page: SanguoshaPage;

  beforeEach(() => {
    page = new SanguoshaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sanguosha works!');
  });
});
