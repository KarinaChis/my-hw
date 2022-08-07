const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


const initialState = {
    todos: [],

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
                todos: [...state.todos, newTodo]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}