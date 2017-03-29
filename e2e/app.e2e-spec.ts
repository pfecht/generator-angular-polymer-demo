import { GeneratorDemoAppPage } from './app.po';

describe('generator-demo-app App', () => {
  let page: GeneratorDemoAppPage;

  beforeEach(() => {
    page = new GeneratorDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
