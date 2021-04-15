<template>
  <ul class="text-sm text-gray-300 pr-2">
    <li v-for="task in tasks" :key="task.id" class="task__list-items ">
      <!-- checkbox -->
      <input
        type="checkbox"
        class="mr-3 form-checkbox h-3 w-3 text-gray-700  bg-transparent  border border-gray-700 rounded-sm"
        :value="task"
        @change="$emit('checked', task.id)"
      />
      <!-- @change="selectCheckbox($event, task, index)" -->
      <!-- vmodel="taskArray" -->
      <div>
        <div v-if="!task.editing" class="task-item-left">
          <!-- show when we're not editing -->
          <div @dblclick="editTask(task)">{{ task.enteredTask }}</div>
        </div>
        <input
          @click="focus"
          type="text"
          v-else
          class="inputEdit bg-transparent outline-none py-0 border-none px-0"
          v-model="task.enteredTask"
          @keyup.enter="doneEdit(task)"
          @blur="doneEdit(task)"
          @keyup.esc="cancelEdit(task)"
          ref="editInput"
        />
      </div>
      <!--  -->
      <section class="ml-auto">
        <span class="text-xs text-blue-600 mr-4 ">Today</span>
        <i class="fas fa-trash-alt  pr-2" @click="deleteTask(index)"></i>
      </section>
      <!-- input edit-->
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tasks'],
  data() {
    return {
      editInput: '',
      currentTaskvalue: '',
    };
  },
  methods: {
    editTask(task) {
      // set the edited inputField to whatever to the added task
      const editedState = task;
      // store the current task
      this.currentTaskvalue = task.enteredTask;
      // Now flip the state
      editedState.editing = true; // task.editing is now true
      this.$nextTick(() => this.$refs.editInput.focus());
    },
    doneEdit(task) {
      // when you hit enter
      // Set the task to the newly edite task
      const editedState = task;
      // Change the editing state to false
      editedState.editing = false;
      // Set the task.enteredTask to whatever it was edited to
    },
    cancelEdit(task) {
      const task1 = task;
      // once the esc button is press, set the task to whatever it was before it was double clicked
      task1.enteredTask = this.currentTaskvalue;
      task1.editing = false;
    },
  },
};
</script>

<style>
.task__list-items {
  @apply border-b-1 border-gray-700  px-4 py-2 flex items-center hover:bg-hoverColor group-hover:opacity-100 transition-all duration-500;
}
</style>
