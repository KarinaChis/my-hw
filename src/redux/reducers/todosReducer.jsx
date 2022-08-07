const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_COMPLETED = "CHANGE_COMPLETED";


const initialState = {
    todos: [],
    count: 0
}
export const todosReducer = (state = initialState, action) => {
    const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
    }
    switch ( action.type ){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, newTodo],
                count: state.count + 1
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(( todo ) => todo.id !== action.payload),
                count: state.count - 1
            };
        case CHANGE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(( todo ) => {
                    if(todo.id === action.payload) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                })
            };
        default:
            return state;
    }
}