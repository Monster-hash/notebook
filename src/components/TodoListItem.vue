<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <!-- 自定义的复选框组件需要根据input的状态判断选中与否 -->
      <input type="checkbox" :checked="todoItem.completed" @click="$emit('change-state',$event)"/>
      {{ todoItem.content }}
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
    name: "TodoListItem", 
    props: ["todoItem"],
};
</script>

<style>
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px; /* 圆角8px */
  color: #626262;
}
.todo-item label {
  position: relative; /* 设置label为相对定位 */
  display: flex;
  align-items: center;
  cursor: pointer;
}
.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}

/* 设置自定义复选框按钮 */
.todo-item label span.check-button {
  position: absolute; /* 绝对定位 */
  top: 0;
}

/* 定义自定义复选框样式 */
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.todo-item label span.check-button::before {
  border: 1px solid #77c1c5;
}
.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #77c1c5;
  transform: translate(1px, 1px) scale(0.8);
  /* 缩小0.8倍向右下移动1px */
  opacity: 0;
}
/* 设置原生复选框隐藏 */
.todo-item input {
  margin-right: 16px;
  opacity: 0;
}
/* label当点击时，若复选框为选中状态，选取相邻的span.check-button自定义复选框按钮 */
.todo-item input:checked + span.check-button::after {
  opacity: 1; /* 设置不透明级别 */
}
</style>