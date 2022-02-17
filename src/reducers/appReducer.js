const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const SET_MODAL = 'SET_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

const defaultState = {
    loader: false,
    visible: false
}

export default function appReducer(state = defaultState, action) {
    
    switch (action.type) {
        case SHOW_LOADER: return {...state, loader: true}
        case HIDE_LOADER: return {...state, loader: false}
        case SET_MODAL: return {...state, visible: true}
        case HIDE_MODAL: return {...state, visible: false}

        default:
            return state
    }
}


export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const setModal = () => ({type: SET_MODAL})
export const hideModal = () => ({type: HIDE_MODAL})
