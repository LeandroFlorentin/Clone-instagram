import { NAVEGAR } from '../Actions'

const initialState = {
    navegar: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVEGAR:
            return {
                ...state,
                navegar: action.payload
            }
        default: return state
    }
}

export default rootReducer;