import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useTasksStore = defineStore('tasks', () => {
    // const tasks = ref([
    //     {
    //         id: 1,
    //         title: 'Learn Vue.js',
    //         done: true
    //     },
    //     {
    //         id: 2,
    //         title: 'Learn React',
    //         done: false
    //     },
    //     {
    //         id: 3,
    //         title: 'Learn Angular',
    //         done: false
    //     },
    //     {
    //         id: 4,
    //         title: 'Learn Svelte',
    //         done: false
    //     }
    // ])

    const tasks = ref(useLocalStorage('tasks', [
        {
            id: 1,
            title: 'Learn Vue.js',
            done: true
        },
        {
            id: 2,
            title: 'Learn React',
            done: false
        },
        {
            id: 3,
            title: 'Learn Angular',
            done: false
        },
        {
            id: 4,
            title: 'Learn Svelte',
            done: false
        }
    ]))
   
    const addTask = (task) => {
        tasks.value.unshift(task)
    }
    
    const deleteTask = (id) => {
        tasks.value = tasks.value.filter(task => task.id !== id)
    }

    const toggleTask = (id) => {
        const task = tasks.value.find(task => task.id === id)
        task.done = !task.done
    }

    const filterDone = () => {
        tasks.value =  tasks.value.filter(task => !task.done)
    }

    const activeTasks = computed(() => {
        return tasks.value.filter(task => !task.done)
    })

    const completedTasks = computed(() => {
        return tasks.value.filter(task => task.done)
    })



  return { tasks,addTask,deleteTask,toggleTask,filterDone,activeTasks,completedTasks }
})
