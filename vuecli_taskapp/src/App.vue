<template>
  <div class=" body_container ">
    <!-- Main container -->
    <div class="container flex justify-center  ">
      <!-- sidebar component -->
      <Sidebar />
      <!--************  right side ************ -->
      <RightContainer :tasks="tasks" @add-task="addTask" />
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
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        enteredTask: 'Task 1',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        enteredTask: 'Task 2',
        completed: false,
        editing: false,
      },
    ];
  },
  methods: {
    addTask(newTask) {
      console.log(newTask, 'app');
      this.tasks = [...this.tasks, newTask];
    },
  },
};
</script>

<style>
.body_container {
  @apply text-white font-padauk min-h-screen bg-gray-200 py-6 flex items-center justify-center sm:py-12;
}
</style>
