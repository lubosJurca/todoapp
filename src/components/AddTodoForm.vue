<template>
   <form class="flex items-center relative max-w-lg mx-auto" @submit.prevent="addTodo" >
    <div class="w-5 h-5 border rounded-full border-gray-400 dark:border-[#393A4B] absolute left-5">

    </div>
    <input type="text" placeholder="Create a new todo..." v-model="newTodo" class="w-full rounded px-12 py-3 outline-none text-xs sm:text-lg dark:bg-dark dark:text-[#C8CBE7]">
   </form>
</template>

<script>
import { ref } from 'vue';
import { useTasksStore } from '../stores/tasksStore';

    export default {
        setup() {
            const tasksStore = useTasksStore()
            
            const newTodo = ref('')

            const addTodo = () => {
                if (!newTodo.value) return
                const newTask = {
                    id: Date.now(),
                    title: newTodo.value,
                    completed: false
                }
                tasksStore.addTask(newTask)
                newTodo.value = ''
            }



            return {
                addTodo,
                newTodo
            }
        }
    }
</script>