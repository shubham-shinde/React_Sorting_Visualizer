import * as types from './list_action_types';

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => ({ num: start + idx, white: false, pointer: false}));
}

const initialState = {
    list : range(1, 35),
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RANDOMIZE_LIST: {
            const new_state = {...state};
            const list = [...new_state.list];
            list.sort(() => (Math.random() - 0.5));
            new_state.list = list;
            return new_state;
        }
        case types.UPDATE_LIST: {
            const new_state = {...state};
            const list = [...action.list];
            new_state.list = [...list];
            return new_state;
        }
        default: 
            return state
    }
}

export default listReducer;