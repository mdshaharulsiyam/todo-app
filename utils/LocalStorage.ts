const isBrowser = (): boolean => typeof window !== 'undefined';
interface Todo {
    id: string;
    heading: string;
    description: string;
}
const getTodosFromLocalStorage = (): Todo[] => {
    if (!isBrowser()) return [];
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
};
export const saveTodosToLocalStorage = (todos: Todo): void => {
    if (isBrowser()) {
        const previustodo = getTodosFromLocalStorage()
        const newTodo = [...previustodo, todos]
        localStorage.setItem('todos', JSON.stringify(newTodo));
    }
};
export const removeTodoById = (id: string): void => {
    if (!isBrowser()) return;
    const previustodo = getTodosFromLocalStorage();
    const newTodo = previustodo.filter(previustodo => previustodo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newTodo));
};
export const updateTodoById = (id: string, heading: string, description: string): void => {
    if (!isBrowser()) return;
    const previustodo = getTodosFromLocalStorage();
    const newTodo = previustodo.map(todo => {
        if (todo.id === id) {
            return { ...todo, heading, description };
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newTodo));
};