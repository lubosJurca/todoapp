<template>
  <header
    class="h-48 bg-bgMobileLight sm:bg-bgDesktopLight dark:bg-bgMobileDark sm:dark:bg-bgDesktopDark bg-no-repeat bg-cover px-6 py-10 font-Josefin max-w-7xl mx-auto"
  >
    <div class="flex justify-between text-xl mb-10 max-w-lg mx-auto">
      <img src="../public/images/todoLogoSvg.svg" alt="Logo" />
      <button  @click="toggleDark()">
        <img src="../public/images/icon-moon.svg" alt="Dark Mode" v-if="!isDark"/>
        <img src="../public/images/icon-sun.svg" alt="Light Mode" v-else />
      </button>
    </div>

    <AddTodoForm />
  </header>

  <main class=" px-6 sm:px-0 font-Josefin max-w-lg mx-auto ">
    <TasksList v-if="filter === 'all'" :tasks="tasksStore.tasks" />
    <TasksList v-if="filter === 'active'" :tasks="tasksStore.activeTasks" />
    <TasksList
      v-if="filter === 'completed'"
      :tasks="tasksStore.completedTasks"
    />

    <div
      class="bg-white px-6 rounded py-4 dark:bg-dark dark:text-[#393A4B]  shadow-xl flex items-center justify-center gap-5 text-[#9495A5] text-sm sm:text-lg font-bold"
    >
      <button
        @click="filter = 'all'"
        class="hover:text-blue-200 dark:hover:text-[#E3E4F1] transition"
        :class="filter === 'all' ? '!text-[#3A7CFD]' : null"
      >
        All
      </button>
      <button
        @click="filter = 'active'"
        class="hover:text-blue-200 dark:hover:text-[#E3E4F1] transition "
        :class="filter === 'active' ? '!text-[#3A7CFD]' : null"
      >
        Active
      </button>
      <button
        @click="filter = 'completed'"
        class="hover:text-blue-200 dark:hover:text-[#E3E4F1] transition"
        :class="filter === 'completed' ? '!text-[#3A7CFD]' : null"
      >
        Completed
      </button>
    </div>

    <div>
      <p class="text-[#9495A5] dark:text-[#393A4B] text-sm sm:text-lg text-center mt-10">
        Drag and drop to reorder list
      </p>
    </div>
  </main>
</template>

<!-- ---------  SCRIPT ------- -->
<script>
import { ref } from 'vue';

// vueuse
import { useDark, useToggle } from '@vueuse/core';

// pinia
import { useTasksStore } from './stores/tasksStore';

// components
import AddTodoForm from './components/AddTodoForm.vue';
import TasksList from './components/TasksList.vue';

export default {
  name: 'App',
  components: {
    AddTodoForm,
    TasksList,
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const tasksStore = useTasksStore();

    const filter = ref('all');

    return {
      tasksStore,
      filter,
      isDark,
      toggleDark,
    };
  },
};
</script>

<style>
html.dark {
  color-scheme: dark;
}

</style>