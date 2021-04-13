<template>
  <div class=" body_container ">
    <!-- Main container -->
    <div class="container flex justify-center  ">
      <!-- sidebar component -->
      <Sidebar />
      <!--************  right side ************ -->
      <RightContainer
        :completedTasks="completedTasks"
        :tasks="tasks"
        @add-task="addTask"
        @checked="onChange"
        @completed-checkbox="completedCheckbox"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import RightContainer from './components/RightContainer.vue';

export default {
  name: 'App',
  components: { Sidebar, RightContainer },
  data() {
    return {
      enteredTask: '',
      tasks: [],
      completedTasks: [],
    };
  },
  methods: {
    addTask(newTask) {
      // spread it across and add the new task
      // newTask is an object

      this.tasks = [...this.tasks, newTask];
    },
    onChange(id) {
      // Find the task that was clicked on
      const clickedTask = this.tasks.find(task => task.id === id);
      clickedTask.completed = !clickedTask.completed;
      // Add that task to completedTask
      this.completedTasks.push(clickedTask);
      // Then remove it from current uncompleted task list
      // BUG;
      setTimeout(() => {
        this.removeTask(id);
      }, 150);
    },
    removeTask(id) {
      // Remove it from the current uncompleted tasks list
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    completedCheckbox(id) {
      // Find the completedTask that was checked
      const clickedCompletedTask = this.completedTasks.find(task => task.id === id);
      // Set completedTask to a new array that contains all the tasks EXCEPT the one that was clicked on
      setTimeout(() => {
        this.completedTasks = this.completedTasks.filter(task => task.id !== id);
      }, 150);

      // Add the clicked task back to regular tasks array
      // this.tasks = [...this.tasks, clickedCompletedTask];
      this.tasks.push(clickedCompletedTask);
    },
  },
};
</script>

<style>
.body_container {
  @apply text-white font-padauk min-h-screen bg-gray-200 py-6 flex items-center justify-center sm:py-12;
}
</style>
