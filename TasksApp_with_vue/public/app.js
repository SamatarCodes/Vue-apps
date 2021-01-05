const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      beforeEdit: '',
      cacheTasks: [],
      textColor: '',
      foundWord: false,
      // Task to loop over
      tasks: [],
      // list of checkboxes
      taskArray: [],
      // completed task array
      completedTasks: [],
    };
  },
  computed: {
    checkDuplicateTask() {
      if (
        // (this.enteredTask !== '') &
        this.cacheTasks.includes(this.enteredTask.trim().toLowerCase())
      ) {
        return `This task '${this.enteredTask.trim()}' already exist`;
      }
    },
    addClass() {
      if (this.enteredTask.includes('tomorrow')) {
        return (this.textColor = 'blue');
      }
      this.textColor = 'white';
    },
  },

  methods: {
    addTask() {
      // If user tries to add empty task or it's already included in the cache tasks, then return - cannot add
      if (
        this.cacheTasks.includes(this.enteredTask.toLowerCase().trim()) ||
        this.enteredTask.trim().length === 0
      ) {
        return;
      } else {
        // if field is not empty or task is not included in cachetasks, then add to tasks array
        this.tasks.push({
          enteredTask: this.enteredTask,
          completed: false,
          editing: false,
        });
        // add this task to cacheTasks array
        this.cacheTasks.push(this.enteredTask.toLowerCase());
      }

      // Clear the input field
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

      // Remove from cachearray
      this.cacheTasks.splice(index, 1);
    },
    // delete task
    deleteTask(taskIndex) {
      // use splice method to remove the task from the tasks array
      this.tasks.splice(taskIndex, 1);
      // Delete it from the cache tasks as well
      this.cacheTasks.splice(taskIndex, 1);
    },
    uncompleteTask(e, task, index) {
      task.completed = e.target.checked;
      // add it back to the taskArray
      this.tasks.push({
        enteredTask: task.completedTask,
        completed: false,
        editing: false,
      });
      // Remove it from the completed task array
      const that = this;
      setTimeout(() => {
        that.completedTasks.splice(index, 1);
      }, 400);
      // Add to cachetasks array as well
      this.cacheTasks.push(task.completed.toLowerCase().trim());
    },

    editTask(task) {
      // Grab the data before it's edited
      this.beforeEdit = task.enteredTask;
      // Change the editing state
      task.editing = !task.editing;
      this.$nextTick(() => this.$refs.input.focus());
    },
    doneEdit(task, index) {
      // if empty string, set task to before task was edited
      if (task.enteredTask.trim().length === 0) {
        task.enteredTask = this.beforeEdit;
      }
      // Set the newly task.entered to duplicateCached
      this.cacheTasks.push(task.enteredTask.toLowerCase().trim());
      this.cacheTasks.splice(index, 1);
      // Change editing state
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
