import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toDos from "../../data/toDos";
import { TodosListStructure } from "../../types";

export const todosSlice = createSlice({
  name: "toDo",
  initialState: toDos,
  reducers: {
    loadTodos: (
      currentTodos: TodosListStructure,
      action: PayloadAction<TodosListStructure>
    ) => [...action.payload],
  },
});

export const todosReducer = todosSlice.reducer;
export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
