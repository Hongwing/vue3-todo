<template>
  <div class="h-todo-item" @click="onItemClick(todo)">
      <p :class="todo.state == 0 ? 'un-done' : 'done'">ToDo: {{ todo.content }}</p>
      <!-- <li :class="todo.state == 0 ? 'un-done' : 'done'">ToDo: {{ todo.content }}</li> -->
  </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        todo: Object,
        onItemClick: Function
    }
}
</script>

<style>
.done {
    text-decoration: line-through;
    font-weight: bold;
}
.un-done {
    text-decoration: none;
}
.h-todo-item {
    width: 60%;
    text-align: left;
    padding: 0 20px;
    margin: 10px auto;
    border: 1px dashed #40b983;
    font-family: cursive;
    transition: all ease .5s;
    font-size: 18px;
}
.h-todo-item:hover {
    font-size: 20px;
}
</style>