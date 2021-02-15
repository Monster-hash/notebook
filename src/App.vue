<template>
  <main>
    <!-- 整体容器 -->
    <div class="container">
      <!-- todo-app的整体容器 -->
      <h1>网站待办事项清单</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <!-- 通过addTodo监听todo-add组件的事件 -->
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" />
      <!-- 通过todos属性把todo列表传递给todo-list -->
    </div>
  </main>
</template>

<script>
import { computed,ref } from "vue";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: { TodoAdd, TodoFilter, TodoList },
  // 添加Todo
  // 创建一个数组保存Todo列表数据
  setup() {
    const todos = ref([]);
    // ref包装空数组作为默认todo列表数据
    const addTodo = (todo) => todos.value.push(todo);
    // 定义一个添加todo函数通过事件接收todo参数保存todo信息，追加到todo列表中

    const filter = ref("all");
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });

    return {
      // 以对象形式返回
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  /* 设置盒模型 
  border-box 告诉浏览器设置的边框和内边距的值是包含在width内的，内容区的实际宽度会是width减去border + padding的计算值*/
  margin: 0;
  /* 外边距 */
  padding: 0;
  /* 内边距 */
  font-family: Helvetica, "Microsoft yahei";
}
/* 页面布局 */
main {
  width: 100vw;
  min-height: 100vh;
  /* 设置min-height而不是height，todo容器添加多条todo，使得在滚动条的情况下，背景色依然能够不变 */
  display: grid;
  /* 应用grid布局 */
  /* justify-items 和 align-litems 是从整体上调整 网格项(grid items)中的内容 在 网格区域（grid area） 中的位置的 */
  align-items: center;
  /* 将网格项中的内容对齐到其网格区域（grid area）列轴线的中心位置 */
  justify-items: center;
  /*  将网格项中的内容对齐到其网格区域（grid area）行轴线的中心位置 */
  /* background-color: #bde4e2; */
  background-color: #98d4d8;
}
.container {
  width: 60%;
  max-width: 400px;
  /* 最大宽度 */
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  /* 设置阴影，模糊半径24px，黑色透明度0.15 */
  border-radius: 24px;
  /* 设置圆角半径 */
  padding: 48px 28px;
  /* 内间距 上下 左右 */
  background-color: rgb(245, 246, 252);
}
/* 设置标题 */
h1 {
  margin: 24px 0;
  /* 标题间距 */
  font-size: 28px;
  /* 文字大小 */
  color: #16a0aa;
  /* 字体颜色 */
}
</style>
