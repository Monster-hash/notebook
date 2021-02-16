<template>
  <div class="input-add">
    <!-- todo-app的输入框及按钮 -->
    <input
      type="text"
      name="todo"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
    />
    <!-- v-model同步用户输入内容 -->
    <button @click="emitAddTodo">
      <i class="plus"></i>
      <!-- 仿照Font Awesome字体库的标记 -->
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoApp",
  props: ["tid"],
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
};
// TodoAdd 组件专属 Composable
function useEmitAddTodo(tid, emit) {
  const todoContent = ref("");
  const emitAddTodo = () => {
    const todo = {
      id: tid,
      content: todoContent.value,
      completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
  };
  return {
    todoContent,
    emitAddTodo,
  };
}

</script>

<style>
/* 设置输入框容器样式，相对定位，flex布局，按钮垂直居中 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}
/* 输入框样式 */
.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none; /* 去掉边框 */
  outline: none; /* 去掉外边线 */
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}
.input-add button {
  /* 设置圆形 */
  width: 46px;
  height: 46px;
  border-radius: 50%;

  background: linear-gradient(#69cfc7, #63bbc7); /* 渐变色 */
  border: none;
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer; /* 设置手型指针 */
  outline: none;
}
/* 设置图标内的加号 */
.input-add .plus {
  display: block; /* 块级元素 */
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff); /* 生成横线和竖线 */
  background-size: 50% 2px, 2px 50%; /* 宽 高 */
  background-position: center;
  background-repeat: no-repeat; /* 不平铺 */
}
</style>