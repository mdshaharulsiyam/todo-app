import { createSlice } from "@reduxjs/toolkit";
const isBrowser = (): boolean => typeof window !== 'undefined';
interface Todo {
    id: string;
    heading: string;
    description: string;
  }
  
  type TodosState = Todo[];
  
const loadInitialState = ():TodosState  => {
    if (!isBrowser()) return [];
  const savedState = localStorage.getItem('todos');
  return savedState ? JSON.parse(savedState) : [];
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: loadInitialState(),
  reducers: {
    createTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo:Todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, data } = action.payload;
      const index = state.findIndex((todo:Todo)  => todo.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...data };
      }
    }
  }
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
