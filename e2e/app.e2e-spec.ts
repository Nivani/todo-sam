import { TodoSamPage } from './app.po';

describe('todo-sam App', () => {
  let page: TodoSamPage;

  beforeEach(() => {
    page = new TodoSamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
