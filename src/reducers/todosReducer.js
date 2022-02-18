import { todosAPI } from "../API/api"
import { hideLoader, showLoader } from "./appReducer"

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = 'DELETE_TODO'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_SELECTED_ITEM = "SET_SELECTED_ITEM"
const EDIT_TODO = "EDIT_TODO"


const defaultState = {
    todos: [],
    currentPage: 1,
    selectedItem: {}
    
}

export default function todosReducer(state = defaultState, action) {
   debugger
    switch (action.type) {
        case SET_TODOS: return {...state, todos: action.payload}
        case DELETE_TODO: return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        case SET_CURRENT_PAGE: return {...state, currentPage: action.payload}
        case SET_SELECTED_ITEM: return {...state, selectedItem: action.payload}
        case ADD_TODO: return {...state, todos: [action.payload, ...state.todos ]}
        case EDIT_TODO: return {...state, todos: [...state.todos.map(todo => todo.id === action.payload.id  
                                                                    ?   { ...todo,   
                                                                        title: action.payload.title !== "" ? action.payload.title : todo.title,
                                                                        completed: action.payload.completed !== "" ? action.payload.completed : todo.completed
                                                                        }
                                                                    : todo
                                                                    )
                                                            ]}    
        default:
            return state
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, payload: todos})
export const addNewTodo = (newTodo) => ({type: ADD_TODO, payload: newTodo})
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id})
export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, payload: p })
export const setSelectedItem = (obj) => ({type: SET_SELECTED_ITEM, payload: obj})
export const editTodo = (obj) => ({type: EDIT_TODO, payload: obj})


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






