import { AngulartrainingPage } from './app.po';

describe('angulartraining App', () => {
  let page: AngulartrainingPage;

  beforeEach(() => {
    page = new AngulartrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
