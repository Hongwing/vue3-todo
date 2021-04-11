<template>
  <div class="hello">
    <h1 :style="{color: 'white'}">{{ msg }}</h1>
    <div>
      <input
        :style="{ display: 'inline-block' }"
        type="text"
        v-model="query"
        name="query"
        id="query"
        placeholder="ctrl + enter"
        @keypress="onTodoInput"
      />
      <button type="reset" @click="reset">重置</button>

      <select
        :style="{ display: 'inline-block' }"
        name="todo-state"
        id="state-choose"
        v-model="selectState"
      >
        <option value="2">全部🔥</option>
        <option value="0">未完成😔</option>
        <option value="1">已完成😄</option>
      </select>

      <!-- <TodoList :todolist="thelist" /> -->
      <SearchToDo
        :datalist="choosed"
        :query="query"
        :refresh="onRefreshTodoList"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-dom";
// import TodoList from '../components/TodoList'
import SearchToDo from "../components/SearchToDo";

const DATALIST = [
  {
    id: 1,
    content: "切西瓜🍉",
    state: 0,
  },
  {
    id: 2,
    content: "吃蒜蓉粉丝🦞",
    state: 1,
  },
  {
    id: 3,
    content: "过年",
    state: 1,
  },
  {
    id: 4,
    content: "春游",
    state: 0,
  },
  {
    id: 5,
    content: "剪头发💇",
    state: 0,
  },
];

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    // TodoList,
    SearchToDo,
  },
  computed: {
    choosed() {
      if (this.selectState == 2) return this.datalist;

      return this.datalist.filter((x) => x.state == this.selectState);
    },
  },
  data() {
    return {
      datalist: DATALIST,
      selectState: 2,
      inputvalue: "",
    };
  },
  setup(props) {
    console.info(props);
    let query = ref("");

    let reset = () => {
      query.value = "";
    };

    const thelist = computed(() => {
      return DATALIST.filter((d) => d.content.includes(query.value));
    });

    return {
      query,
      thelist,
      reset,
    };
  },
  methods: {
    onRefreshTodoList(todo) {
      this.datalist = this.datalist.map((item) => {
        if (item.id == todo.id) {
          return {
            ...item,
            state: todo.state == 0 ? 1 : 0,
          };
        }
        return item;
      });
    },
    onTodoInput(e) {
      if (e.charCode == 13 && e.ctrlKey) {
        this.datalist.push({
          id: this.datalist.length + 1,
          content: this.query,
          state: 0,
        });
        this.reset();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
