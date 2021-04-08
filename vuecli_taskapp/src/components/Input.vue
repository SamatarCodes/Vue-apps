<template>
  <div class="input__container relative">
    <input
      v-model="enteredTask"
      @keyup.enter="addTask()"
      class="input"
      placeholder="Add a new Task. Press Enter to save"
    />
  </div>
</template>

<script>
export default {
  emits: ['add-task'],

  data() {
    return {
      enteredTask: '',
    };
  },
  methods: {
    addTask() {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        enteredTask: this.enteredTask,
        completed: false,
        editing: false,
      };

      this.$emit('add-task', newTask);
      // clear the input field
      this.enteredTask = '';
    },
  },
};
</script>

<style>
.input {
  @apply bg-inputColor px-2 py-2 text-sm w-full text-white rounded-sm;
}
</style>
