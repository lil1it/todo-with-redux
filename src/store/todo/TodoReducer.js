export const todoActionType = {
    ADD: "ADD",
    EDIT: "EDIT",
    COMPLETE: "COMPLETE",
    DELATE: "DELATE",
  };
  
  export const initialState = { todos: [] };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case todoActionType.ADD: {
        const NewTodo = { id: `${new Date().toISOString()}-${action.payload}`, name: action.payload, done: false };
  
        return {
          ...state,
          todos: [...state.todos, NewTodo],
        };
      }
  
      case todoActionType.COMPLETE:
        const doneTodo = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        });
        return { ...state, todos: doneTodo };
      case todoActionType.DELATE:
        const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
        return {
          todos: filteredTodos,
        };
  
      default:
        return state;
    }
  };
  
