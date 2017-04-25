import { LukeappPage } from './app.po';

describe('lukeapp App', () => {
  let page: LukeappPage;

  beforeEach(() => {
    page = new LukeappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
