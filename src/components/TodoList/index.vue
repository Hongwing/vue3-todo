<template>
  <div class="h-todo-list">
      <div class="list-wrapper">
          <TodoItem v-for="(item, index) in todolist" :key="index" :todo="item" :onItemClick="refresh" />
      </div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem'

export default {
    name: "TodoList",
    props: {
        todolist: Array,
        refresh: Function
    },
    components: {
        TodoItem
    }
}
</script>

<style>

</style>