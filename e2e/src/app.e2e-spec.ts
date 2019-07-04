import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve ficar 6 ao clicar duas vezes em aumentar', () => {
    page.navigateTo();
    page.getAumentarBtn().click();
    page.getAumentarBtn().click();
    page.getAumentarBtn().click();
    page.getAumentarBtn().click();
    page.getAumentarBtn().click();
    page.getAumentarBtn().click();
    expect(page.getCounterText()).toBe('6');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
