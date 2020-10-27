import { useReducer, useState } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  todos: [
    { id: 1, title: "Wash dishes" },
    { id: 2, title: "Study JS" },
    { id: 3, title: "Buy ticket" },
  ],
  query: "",
};

let nextId = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: nextId++, title: action.title }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
