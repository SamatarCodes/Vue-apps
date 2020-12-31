const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      beforeEdit: '',
      duplicateCache: '',
      cacheTasks: [],
      textColor: '',
      foundWord: false,
      word: '',
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
        (this.enteredTask !== '') &
        // (this.enteredTask.trim().toLowerCase() ===
        //   this.duplicateCache.toLowerCase())
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
      // If empty task, return

      if (
        this.cacheTasks.includes(this.enteredTask.toLowerCase().trim()) ||
        this.enteredTask.trim().length === 0
      ) {
        return;
      } else {
        this.tasks.push({
          enteredTask: this.enteredTask,
          completed: false,
          editing: false,
        });
        this.cacheTasks.push(this.enteredTask);
      }

      // Cache the enteredTask
      //this.duplicateCache = this.enteredTask;

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
      // use splice method to remove the task from the tasks array
      this.tasks.splice(taskIndex, 1);
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
    },

    editTask(task) {
      // Grab the data before it's edited
      this.beforeEdit = task.enteredTask;
      // Change the editing state
      task.editing = !task.editing;
      this.$nextTick(() => this.$refs.input.focus());
    },
    doneEdit(task) {
      // if empty string, set task to before task was edited
      if (task.enteredTask.trim().length === 0) {
        task.enteredTask = this.beforeEdit;
      }
      // Set the newly task.entered to duplicateCached
      //this.duplicateCache = task.enteredTask;
      this.cacheTasks.push(task.enteredTask);
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
