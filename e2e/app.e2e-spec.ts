import { J42Page } from './app.po';

describe('j42 App', () => {
  let page: J42Page;

  beforeEach(() => {
    page = new J42Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
