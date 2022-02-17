import { todosAPI } from "../API/api"
import { hideLoader, showLoader } from "./appReducer"

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = 'DELETE_TODO'


const defaultState = {
    todos: []
    
}

export default function todosReducer(state = defaultState, action) {
    //debugger
    switch (action.type) {
        case SET_TODOS: return {...state, todos: action.payload}
        case DELETE_TODO: return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        // case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_TODO: return {...state, todos: [action.payload, ...state.todos ]}
        // case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        // case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        
        
        default:
            return state
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, payload: todos})
export const addNewTodo = (newTodo) => ({type: ADD_TODO, payload: newTodo})
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id})


export const getTodosThunkCreator = () => {
    
    return async (dispatch) => {     
        try {   
            dispatch(showLoader())
            const response = await todosAPI.getTodos()
            dispatch (setTodos (response.data));
            dispatch(hideLoader())  
        } catch (e) {
            alert(e?.response?.data?.message)
        }  
    }}    






