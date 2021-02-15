<template>
  <div class="filters">
    <!-- 过滤选项 -->
    <span
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('change-filter', filter.value)"
      class="filter"
      :class="{ active: selected === filter.value }"
      >{{ filter.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props:["selected"],
  setup() {
    const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ];
    return { filters };
  },
};
</script>

<style>
/* 过滤选项 */
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
  cursor: pointer;
}
/* 每个选项样式 */
.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
  cursor: pointer;
}
/* 选中状态样式 */
.filters .filter.active {
  font-weight: bold;
  color: #258991;
  transform: scale(1.2);
  /* 放大1.2倍 */
}
</style>