<template>
  <!--************  right side ************ -->
  <div class="right__container">
    <!-- inbox container -->
    <div class="inside-container px-5 border-2 border-green-500">
      <!-- Inbox title container -->
      <div class="title flex items-center ">
        <i class="fas fa-envelope  mr-2"></i>
        <h4 class="py-4 text-2xl font-bold">Inbox</h4>
      </div>
      <!-- input field  -->
      <!-- <Input :tasks="tasks" @add-task="$emit('add-task', newTask)" /> -->
      <Input @add-task="addTask" />
      <div class="overflow-y-auto mt-4 flex flex-col h-56">
        <h5 class="pl-3 pb-3 text-sm text-yellow-500">checkDuplicate</h5>
        <h5 class=" pl-3 pb-3 text-sm text-red-700">You have 4 tasks remaining</h5>
        <!-- Tasks list goes here -->
        <Tasks :tasks="tasks" />
      </div>
      <!-- Completed section  -->
      <CompletedSection />
    </div>
  </div>
</template>

<script>
import Tasks from './Tasks.vue';
import Input from './Input.vue';
import CompletedSection from './CompletedSection.vue';

export default {
  emits: ['add-task'],
  props: ['tasks'],
  components: { Tasks, Input, CompletedSection },
  data() {
    return {
      enteredTask: '',
    };
  },
  methods: {
    addTask(newTask) {
      this.$emit('add-task', newTask);
    },
  },
};
</script>

<style>
.right__container {
  @apply pb-10 text-white bg-darkBackground w-full max-w-xl rounded-r-sm rounded-br-sm;
}
</style>
