import { BasketProjectPage } from './app.po';

describe('basket-project App', () => {
  let page: BasketProjectPage;

  beforeEach(() => {
    page = new BasketProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
