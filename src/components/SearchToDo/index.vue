<template>
  <div class="h-todo-list">
      <div class="list-wrapper">
          <TodoItem v-for="(item, index) in results" :key="index" :todo="item" :onItemClick="refresh" />
      </div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem'
import { computed } from '@vue/runtime-core'

export default {
    name: "SearchToDo",
    props: {
        datalist: {
            type: Array
        },
        query: {
            type: String
        },
        refresh: Function
    },
    components: {
        TodoItem
    },
    setup(props, context) {
        console.info(props, context)

        let results = computed(() => {
            return props.datalist.filter(d => d.content.includes(props.query))
        })

        return {
            results
        }
    }
}
</script>

<style>

</style>