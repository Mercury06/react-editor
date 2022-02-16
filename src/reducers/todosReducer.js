import { todosAPI } from "../API/api"

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = 'DELETE_TODO'


const defaultState = {
    todos: [],
    isLoading: true
    
}

export default function todosReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TODOS: return {...state, todos: action.payload}
        // case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        // case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        // case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        // case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        // case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id !== action.payload)]}
        
        default:
            return state
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, payload: todos})
// export const addFile = (file) => ({type: ADD_FILE, payload: file})
// export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})

export const getTodosThunkCreator = () => {
    
    return async (dispatch) => {     
        try {   
       // dispatch (toggleIsFetching (true));
            const response = await todosAPI.getTodos()
            dispatch (setTodos (response.data)); 
        } catch (e) {
            alert(e?.response?.data?.message)
        }  
    }}    






