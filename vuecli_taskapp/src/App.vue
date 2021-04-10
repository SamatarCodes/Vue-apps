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
      completedTasks: [
        {
          id: 1,
          enteredTask: 'Task 1',
          completed: true,
          editing: false,
        },
      ],
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
      // spread it across and add the new task 
      this.tasks = [...this.tasks, newTask];
    },
    onChange(id) {
      // Find the task that was clicked on 
      const clickedTask = this.tasks.find(task => task.id === id);
      
      // Add that task to completedTask
      this.completedTasks = [...this.completedTasks, clickedTask];
     
      this.removeTask(id);
    },
    removeTask(id) {
      // Remove it the current uncompleted tasks list
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
};
</script>

<style>
.body_container {
  @apply text-white font-padauk min-h-screen bg-gray-200 py-6 flex items-center justify-center sm:py-12;
}
</style>
