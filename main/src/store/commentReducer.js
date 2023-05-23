const defaultState = {
    comment: []
}
export const ADD_COMMENT = 'ADD_COMMENT'
export const FETCH_COMMENT = 'FETCH_COMMENT'


export const commentReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return  {...state, comment: action.payload}
        default:
            return state
    }
}

export const AddCommentAction = (payload) => ({type:'ADD_COMMENT', payload})
export const fetchComment = () => ({type:'FETCH_COMMENT'})