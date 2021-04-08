<template>
  <!-- sidebar -->
  <div class="sidebar">
    <!-- sidebar Inner -->
    <div class="sidebar__inner w-48 pt-2 ">
      <!-- sidebar title -->
      <div class=" pl-3 title flex items-center">
        <i class="far fa-list-alt mr-2"></i>
        <h3>Task Entry</h3>
      </div>
      <!-- sidebar menu -->
      <ul class="mt-8 text-sm text-gray-300">
        <li class="sidebar__links ">
          <a href="#" class="py-2  flex items-baseline pr-3">
            <i class="fas fa-envelope fa-sm mr-2"></i>
            <span>Inbox</span>
            <span class="ml-auto text-green-600"></span>
          </a>
        </li>

        <li class="sidebar__links">
          <a href="#" class=" py-2 flex items-baseline pr-3">
            <i class="far fa-calendar-alt fa-sm mr-2"></i>
            <span>Tomorrow</span>
            <span class="ml-auto">0</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  @apply bg-sidebarColor rounded-l-sm rounded-bl-sm;
}

.sidebar__links {
  @apply pl-3  hover:bg-hoverColor group-hover:opacity-100 transition-all duration-500;
}
</style>
