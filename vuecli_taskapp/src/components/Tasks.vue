<template>
  <ul class="text-sm text-gray-300 pr-2 ">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="border-b-1 border-gray-700  px-4 py-2 flex items-center hover:bg-hoverColor group-hover:opacity-100 transition-all duration-500 "
    >
      <!-- checkbox -->
      <input
        type="checkbox"
        class="mr-3 form-checkbox h-3 w-3 text-gray-700  bg-transparent  border border-gray-700 rounded-sm"
        :value="task"
        @change="$emit('checked', task.id)"
      />
      <!-- @change="selectCheckbox($event, task, index)" -->
      <!-- vmodel="taskArray" -->
      <div class="task-item-left">
        <!-- show when we're not editing -->
        <div>{{ task.enteredTask }}</div>
      </div>

      <!--  -->
      <section class="ml-auto">
        <span class="text-xs text-blue-600 mr-4 ">Today</span>
        <i class="fas fa-trash-alt  pr-2" @click="deleteTask(index)"></i>
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tasks'],
};
</script>

<style></style>
