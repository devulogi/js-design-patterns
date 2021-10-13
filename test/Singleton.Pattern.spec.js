const { expect } = require('chai');
const { Factory } = require('./Factory.Pattern.spec');

const Singleton = function () {
  const tasks = {
    urgent: [],
    not_important: [],
  };
  return {
    createTasks: function ({ type, task, createdAt }) {
      switch (type) {
        case 'urgent':
          tasks.urgent.push({
            task: task.task,
            completed: task.completed,
            createdAt,
          });
          return this;
        case 'not_important':
          tasks.not_important.push({
            task: task.task,
            completed: task.completed,
            createdAt,
          });
          return this;
        default:
          throw new TypeError('No params provided.');
      }
    },
    getUrgentTasks: function () {
      return tasks.urgent;
    },
    getNotImportantTasks: function () {
      return tasks.not_important;
    },
    getTaskCollection: function () {
      return tasks;
    },
  };
};

describe('singleton pattern', () => {
  it('should return urgent task', done => {
    const taskCollection = Singleton()
      .createTasks(new Factory('urgent', 'fix bugs #141'))
      .createTasks(new Factory('urgent', 'fix bugs #143'))
      .createTasks(new Factory('not_important', 'play games'))
      .createTasks(new Factory('not_important', 'watch anime'));
    expect(taskCollection.getUrgentTasks()[0].task).to.equal('fix bugs #141');
    done();
  });
});
