## Vue Cli创建vue3项目

`npm install -g @vue/cli` 更新vue/cli  

`vue create todo-app` 在项目文件夹下`vue create 项目名称`，创建项目  

选择vue3

`vue ui` 进入图形化客户端

`cd todo-app`进入项目文件夹
`yarn serve`启动服务
```
src/
App.vue/  **项目的入口文件** 是网站首页,是一个vue项目的主组件,页面入口文件 ,所有页面都是在_App.vue_下进行切换的。是整个项目的关键,_app.vue_负责构建定义及页面组件归集

components //存放独立组建
assets //存放静态资源文件(图片、视频)

main.js //是项目的入口文件，`项目中所有的页面都会加载main.js`,所以main.js,主要有三个作用：  
1.实例化Vue。  
2.放置项目中经常会用到的插件和CSS样式。例如： 网络请求插件:`axios和vue-resource`、图片懒加载插件：`vue-lazyload`  
3.存储全局变量。例如（用于的基本信息）
```
Veter插件：使vue代码高亮及语法提示
```
<template> </template> //HTML部分
<script> </script> //js部分
<style> </style> //css部分
```

## 编写HTML
```
<template>
  <main> <!-- 整体容器 -->
    <div class="container"> <!-- todo-app的整体容器 -->
      <h1> 网站待办事项清单</h1>
      <div class="input-add"> <!-- todo-app的输入框及按钮 -->
      <input type="text" name="todo" />
      <button>
        <i class="plus"></i> <!-- 仿照Font Awesome字体库的标记 -->
      </button>
      </div>
      <div class="filters"> <!-- 过滤选项 -->
        <span class="filter active">全部</span>
        <span class="filter">已完成</span>
        <span class="filter">未完成</span>
      </div>
      <div class="todo-list">
        <div class="todo-item">
          <label> <!-- 自定义的复选框组件需要根据input的状态判断选中与否 -->
            <input type="checkbox" />
            Todo 1
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 2
            <span class="check-button"></span>
          </label>
        </div>
        <div class="todo-item">
          <label>
            <input type="checkbox" />
            Todo 3
            <span class="check-button"></span>
          </label>
        </div>
      </div>
    </div>
  </main>
</template>
```

## 编写css

背景色：淡紫色  
界面框：圆角矩形  
外层阴影  
输入框外阴影  
过滤选项不同状态效果不同  
不同选项间移动有过渡效果  
```
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
  font-family: Helvetica,"Microsoft yahei";
  
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
}
/* 选中状态样式 */
.filters .filter.active {
  font-weight: bold;
  color: #258991;
  transform: scale(1.2);
  /* 放大1.2倍 */
}
.todo-list {
  display: grid;
  row-gap: 14px; /* 行间距 */
}
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
  position: absolute;  /* 绝对定位 */
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
  opacity: 1;
}
</style>

```
## 抽离组件

1.TodoAdd.vue //卡片容器，标题（静态，无业务逻辑）  

2.TodoFilter.vue //输入框及按钮  

3.过滤选项，todo列表  

  - 过滤选项TodoList.vue
  - todo列表TodoListItem.vue


### ./src/App.vue
```
<template>
  <main> <!-- 整体容器 -->
    <div class="container"> <!-- todo-app的整体容器 -->
      <h1> 网站待办事项清单</h1>
      <todo-add />
      <todo-filter />
      <todo-list />
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: 'App',
  components: {TodoAdd,TodoFilter,TodoList },
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
  font-family: Helvetica,"Microsoft yahei";
  
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
```

### ./src/components/TodoAdd.vue
```
<template>
      <div class="input-add"> <!-- todo-app的输入框及按钮 -->
      <input type="text" name="todo" />
      <button>
        <i class="plus"></i> <!-- 仿照Font Awesome字体库的标记 -->
      </button>
      </div>
</template>

<script>
export default {
    name: "TodoApp",

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
```

### ./src/components/TodoFilter.vue
```
<template>
  <div class="filters">
    <!-- 过滤选项 -->
    <span class="filter active">全部</span>
    <span class="filter">已完成</span>
    <span class="filter">未完成</span>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
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
}
/* 选中状态样式 */
.filters .filter.active {
  font-weight: bold;
  color: #258991;
  transform: scale(1.2);
  /* 放大1.2倍 */
}
</style>
```

### ./src/components/TodoList.vue

```
<template>
    <div class="todo-list">
        <todo-list-item v-for="n in 3" :key="n"></todo-list-item>
        <!-- 列表项使用v-for循环展示3个内容 -->
    </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
// todo列表中导入item列表项
export default {
  name: "TodoList",
  components: { TodoListItem },
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px; /* 行间距 */
}
</style>

```

### ./src/components/TodoListItem.vue

```
<template>
  <div class="todo-item">
    <label>
      <!-- 自定义的复选框组件需要根据input的状态判断选中与否 -->
      <input type="checkbox" />
      Todo 1
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
    name: "TodoListItem", 
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
```

## 处理时间和数据
使用Composition API来实现组件功能和状态管理

### vue3中Composition API 和 vue2中Options API 的对比
**Options API：**
- 在vue2中会在一个vue文件中data，computed，methods，watch，mounted中等等定义属性和方法，共同处理页面逻辑
 p1
- 缺点： 一个功能往往需要在不同的vue配置项中定义属性和方法，比较分散，项目小还好，清晰明了，对于大项目，一个methods中可能包含多个方法，往往很难分清哪个方法对应着哪个功能
**Composition API**
- 在vue3 Composition API 中，代码是根据逻辑功能来组织的，一个功能所定义的所有api会放在一起（更加的高内聚，低耦合），这样做，即时项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有API，而不像vue2 Options API 中一个功能所用到的API都是分散的，需要改动功能，到处找API的过程是很费劲的
 p2p3
优点：
- Composition API 是根据逻辑相关性组织代码的，提高可读性和可维护性
- 基于函数组合的 API 更好的重用逻辑代码（在vue2 Options API中通过Mixins重用逻辑代码，容易发生命名冲突且关系不清） 

### 业务流程
- 输入Todo内容，点击按钮或按回车确认
- 新添加todo默认显示在列表下方
- 点击复选框按钮完成todo
- 过滤todo列表，已完成/未完成

### App.vue

```
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

```

### TodoAdd.vue

```
<template>
      <div class="input-add"> <!-- todo-app的输入框及按钮 -->
      <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo" />
      <!-- v-model同步用户输入内容 -->
      <button  @click="emitAddTodo">
        <i class="plus"></i> <!-- 仿照Font Awesome字体库的标记 -->
      </button>
      </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "TodoApp",
    setup(props, context){
      const todoContent = ref("");
      const emitAddTodo = () => {
        const todo = {
          id: props.tid,
          content: todoContent.value,
          completed: false,
        };
        context.emit("add-todo", todo);
        todoContent.value = "";
      };
      return {
        todoContent,
        emitAddTodo,
      };
    }

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
```
### TodoFilter
```
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
```
### TodoList.vue

```
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
```

### TodoListItem

```
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
```

## 抽离composables

把todo列表和添加todo的方法抽离成公共的composables函数

FilteredTodos抽离成公共的composables函数

TodoAdd中的事件触发逻辑抽离成组件特有的composables

### 新建src/composables
### 文件命名规则：use+action
### 分类已有业务逻辑
### 调用composable
### 返回验证

## 假数据接口使用
http://jsonplaceholder.typicode.com/  
https://mockend.com/  