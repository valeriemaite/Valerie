import { ProAppPage } from './app.po';

describe('pro-app App', () => {
  let page: ProAppPage;

  beforeEach(() => {
    page = new ProAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
