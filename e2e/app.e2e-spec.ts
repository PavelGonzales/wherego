import { WheregoPage } from './app.po';

describe('wherego App', function() {
  let page: WheregoPage;

  beforeEach(() => {
    page = new WheregoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
