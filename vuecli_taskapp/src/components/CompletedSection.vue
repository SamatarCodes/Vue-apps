<template>

  <section class="completed flex  h-40 flex-col overflow-y-auto   ">
    <h6 class=" pb-3 text-xs text-gray-500 flex items-center">
      <i class="mr-1 text-gray-400 fas fa-play fa-xs"></i>
      Completed
    </h6>
    <ul class="text-sm text-gray-300">
      <li
        class="border-b-1 border-gray-700 px-4  py-2 flex items-center hover:bg-hoverColor"
        v-for="(task, index) in completedTasks"
        :key="index"
      >
  
        <!-- checkbox -->
        <input
          type="checkbox"
          class="mr-3 form-checkbox h-3 w-3 text-gray-700  bg-transparent  border border-gray-700 rounded-sm "
          :value="task"
          
          @click="check"
          v-model="task.completed"
        />
<!-- @change="uncompleteTask($event, task, index)" -->
        <span class="text-gray-600" :class="{ 'line-through': task.completed }">{{ task.enteredTask }} {{task.index}}
        </span>
      </li>
    </ul>
  </section>

</template>

<script>
export default {
  props: ['completedTasks'],
  methods: {
    check() {
      this.completedTasks.forEach(task => console.log(task.enteredTask, task.completed));
    },
  },
};
</script>

<style></style>
