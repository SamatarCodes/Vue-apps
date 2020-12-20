const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      // Task to loop over
      tasks: [],
      // list of checkboxes
      taskArray: [],
      // completed task array
      completedTasks: [],
    };
  },

  methods: {
    addTask() {
      // push newly entered task to tasks array
      this.tasks.push({
        enteredTask: this.enteredTask,
        completed: false,
      });
      // Clear the input
      this.enteredTask = '';
      console.log(this.tasks);
    },
    check(e, task, index) {
      // when checkbox is checked, assigned that value to task.completed
      task.completed = e.target.checked;
      // when checkbox is checked - add task to completed task array
      this.completedTasks.push({
        completedTask: task.enteredTask,
        completed: task.completed,
      });

      // Also remove the checked task from the task array
      this.tasks.splice(index, 1);
    },
    // delete task
    deleteTask(taskIndex) {
      // FORGOT THIS PART
      // use splice method to remove the task from the tasks array
      this.tasks.splice(taskIndex, 1);
    },
    uncompleteTask(e, task, index) {
      task.completed = e.target.checked;
      // add it back to the taskArray
      this.tasks.push({
        enteredTask: task.completedTask,
        completed: false,
      });
      // Remove it from the completed task array
      this.completedTasks.splice(index, 1);
    },
  },
});

app.mount('#app');
