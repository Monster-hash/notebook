<template>
    <div class="todo-list">
        <todo-list-item v-for="todo in todos" :key="todo.id" :todo-item="todo" @change-state="todo.completed = $event.target.checked"></todo-list-item>
        <!-- 列表项使用v-for循环展示3个内容 -->
    </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
// todo列表中导入item列表项
export default {
  name: "TodoList",
  components: { TodoListItem },
  props: ["todos"],
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px; /* 行间距 */
}
</style>