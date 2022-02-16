import {applyMiddleware, combineReducers, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import todosReducer from "./todosReducer"
// import userReducer from "./userReducer"
// import uploadReducer from "./uploadReducer"
// import appReducer from './appReducer'

const rootReducer = combineReducers({
    todos: todosReducer
    // user: userReducer,
    // files: fileReducer,
    // upload: uploadReducer,
    // app: appReducer
})

export const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(thunk)))