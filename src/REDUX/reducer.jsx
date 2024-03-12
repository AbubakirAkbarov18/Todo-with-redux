const InitialState = {
    todos: []
}
export const reducer = (state = InitialState, action) => {
    console.log(action);
    if(action.type === 'NEW_TODO'){
        return {
            todos: [action.todo, ...state.todos]
        }
    }
}