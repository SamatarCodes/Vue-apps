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
      completedTasks: [
        // {
        //   id: 1,
        //   enteredTask: 'Task 1',
        //   completed: true,
        //   editing: false,
        // },
      ],
    };
  },
  created() {
    this.tasks = [
      // {
      //   id: 1,
      //   enteredTask: 'Task 1',
      //   completed: false,
      //   editing: false,
      // },
     
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

      clickedTask.completed = !clickedTask.completed;
      // Add that task to completedTask
      this.completedTasks = [...this.completedTasks, clickedTask];

      // Then remove it from current uncompleted task list
      this.removeTask(id);
    },
    removeTask(id) {
      // Remove it from the current uncompleted tasks list
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    completedCheckbox(id) {
      // Find the completedTask that was checked 
      const clickedCompletedTask = this.completedTasks.find(task => task.id === id);

      // Set completedTask to a new array that contains all the tasks EXCEPT the one that was clicked on 
      this.completedTasks = this.completedTasks.filter(task => task.id !== id);

      // Add the clicked task back to regular tasks array and
      this.tasks = [...this.tasks, clickedCompletedTask];
    },
  },
};
</script>

<style>
.body_container {
  @apply text-white font-padauk min-h-screen bg-gray-200 py-6 flex items-center justify-center sm:py-12;
}
</style>
