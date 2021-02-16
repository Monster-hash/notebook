import { onMounted, ref } from "vue";

export default function useTodos() {
    // ref包装空数组作为默认todo列表数据
    const todos = ref([]);
    // 定义一个添加todo函数通过事件接收todo参数保存todo信息，追加到todo列表中
    const addTodo = (todo) => todos.value.push(todo);
    // 获取远程 todos
    const fetchTodos = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=4"
            
        );
        const rawTodos = await response.json();
        todos.value = rawTodos.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
    };

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo,
    };
}
