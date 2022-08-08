const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_COMPLETED = "CHANGE_COMPLETED";
const ADD_LOGIN = "ADD_LOGIN";

const initialState = {
    todos: [],
    count: 0,
    name: "",
    isLogin: false
}
export const todosReducer = ( state = initialState, action ) => {
    const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
    }
    switch ( action.type ){
        case ADD_TODO:
            return {
                ...state,
                todos: [ ...state.todos, newTodo ],
                count: state.todos.filter(( todo ) => todo.completed === false).length
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(( todo ) => {
                    if( todo.id === action.payload.id ) {
                        return {...todo, title: action.payload.title}
                    }
                    return todo
                }),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(( todo ) => todo.id !== action.payload),
                count: state.todos.filter(( todo ) => todo.completed === false).length
            };
        case CHANGE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map(( todo ) => {
                    if( todo.id === action.payload ) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                }),
                count: state.todos.filter(( todo ) => todo.completed === false).length
            };
        case ADD_LOGIN:
            return{
                ...state,
                name: action.payload,
                isLogin: true
            };
        default:
            return state;
    }
}