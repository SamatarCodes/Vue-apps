const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      // Task to loop over
      tasks: [
        {
          enteredTask: 'Finish Vue',
          completed: false,
          editing: false,
        },
      ],
      // list of checkboxes
      taskArray: [],
      // completed task array
      completedTasks: [],
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },

  methods: {
    addTask() {
      if (this.enteredTask.trim().length === 0) {
        return;
      }
      this.tasks.push({
        enteredTask: this.enteredTask,
        completed: false,
      });

      // Clear the input
      this.enteredTask = '';
    },
    selectCheckbox(e, task, index) {
      // when checkbox is checked, assigned that value to task.completed
      task.completed = e.target.checked;
      // when checkbox is checked - add task to completed task array
      this.completedTasks.push({
        completedTask: task.enteredTask,
        completed: task.completed,
      });

      // Also remove the checked task from the task array after x delay
      const that = this;
      setTimeout(() => {
        that.tasks.splice(index, 1);
      }, 400);
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
      const that = this;
      setTimeout(() => {
        that.completedTasks.splice(index, 1);
      }, 400);
    },

    editTask(task) {
      // Change the editing state
      task.editing = !task.editing;
      this.$nextTick(() => this.$refs.input.focus());
    },
    doneEdit(task) {
      // Also change the editing state
      task.editing = !task.editing;
    },
  },
});

app.mount('#app');
