import { GitAndNgTestPage } from './app.po';

describe('git-and-ng-test App', () => {
  let page: GitAndNgTestPage;

  beforeEach(() => {
    page = new GitAndNgTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
