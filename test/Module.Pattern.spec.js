const { expect } = require('chai');
const { Todo } = require('./Constructor.Pattern.spec');

const Module = {
  config: function () {
    return 'module configuration';
  },
  createTodo: new Todo(),
};

describe('module pattern', () => {
  it('should check if module has property of config', done => {
    expect(Module).to.haveOwnProperty('config');
    done();
  });
  it('should return Todo instance', done => {
    expect(Module.createTodo).to.be.instanceOf(Todo);
    done();
  });
});
