<template>
  <div
    v-if="tasksList.length > 0"
    class="w-full   -mt-6 bg-white dark:bg-dark shadow-lg mb-4 sm:mb-0 border-b-[1px] dark:border-[#393A4B] text-xs sm:text-lg"
  >
    <draggable
      v-model="tasksList"
      group="tasks"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      
        <template #item="{ element: task }">
          <li
            class="flex  bg-white dark:bg-dark items-center relative text-[#494C6B] dark:text-[#C8CBE7] border-b-[1px] dark:border-[#393A4B]"
          >
            <div
              class="w-5 h-5 absolute left-5 cursor-pointer transition"
              @click="toggleTask(task.id)"
            >
              <img src="../../public/images/doneIcon.svg" v-if="task.done" />
              <div
                class="w-5 h-5 border rounded-full border-gray-400 dark:border-[#393A4B]"
                v-else
              ></div>
            </div>

            <p
              class="w-full rounded px-12 py-3  outline-none transition cursor-grab"
              :class="
                task.done
                  ? 'text-[#D1D2DA] dark:text-[#4D5067] line-through'
                  : null
              "
            >
              {{ task.title }}
            </p>
            <img
              src="../../public/images/deleteBtn.svg"
              class="w-3 h-3 absolute right-5 cursor-pointer"
              @click="deleteTask(task.id)"
            />
          </li>
        </template>
      
    </draggable>

    <div
      class="flex items-center justify-between text-[#9495A5] dark:text-[#5B5E7E] px-6 py-4"
    >
      <p>{{ tasksStore.activeTasks.length }} items left</p>
      <button @click="filterDone" class="hover:text-[#E3E4F1] transition">
        Clear completed
      </button>
    </div>
  </div>
  <div
    v-else
    class="bg-white px-6 py-4 dark:bg-dark dark:text-[#393A4B] shadow-xl flex items-center justify-center gap-5 text-[#9495A5] text-sm font-bold"
  >
    <p>No items here</p>
  </div>
</template>

<script>
import { useTasksStore } from '../stores/tasksStore';
import draggable from 'vuedraggable';

import { ref, watch } from 'vue';

export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  components: {
    draggable,
  },
  setup(props) {
    const tasksStore = useTasksStore();
    const { deleteTask, toggleTask, filterDone } = tasksStore;

    const tasksList = ref(props.tasks);

    watch(
      () => props.tasks,
      (newVal) => {
        tasksList.value = newVal;
      }
    );

    return {
      deleteTask,
      tasksStore,
      toggleTask,
      filterDone,
      tasksList,
    };
  },
};
</script>

<style>

</style>
