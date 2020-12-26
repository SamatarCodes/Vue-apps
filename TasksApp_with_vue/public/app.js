const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      beforeEdit: '',
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
      // Grab the data before it's edited
      this.beforeEdit = task.enteredTask;
      // Change the editing state
      task.editing = !task.editing;
      this.$nextTick(() => this.$refs.input.focus());
    },
    doneEdit(task) {
      //  change the editing state as completed
      task.editing = !task.editing;
    },
    cancelEdit(task) {
      // Change the edit
      task.editing = !task.editing;
      task.enteredTask = this.beforeEdit;
    },
  },
});

app.mount('#app');
