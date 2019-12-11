import * as types from './grid_action_types';

function waitTime(ms) {
    return (new Promise(resolve => setTimeout(resolve, ms)));
};

export const randomize_array = () => ({
    type: types.RANDOMIZE_GRID
})
export const sorting_start = (algo) => ({
    type: types.SORTING_START,
    algo
})
export const sorting_end = () => async (dispatch, getState) => {
    dispatch({
        type: types.SORTING_END
    })
    await waitTime(getState().list.wait_time);
    dispatch({
        type: types.CLEAN_LIST
    })
}

export const pause_sorting = () => ({
    type: types.SORTING_PAUSE
})
export const restart_sorting = () => ({
    type: types.SORTING_RESTART
})

export const speed_change = (speed) => ({
    type: types.SPEED_CHANGE,
    speed
})

export const update_list_a = (list) => ({
    type: types.UPDATE_LIST,
    list: [...list]
})

const update_list = async (getState, dispatch, list) => {
    const ms = getState().list.wait_time;
    if (!getState().list.sorting) return;
    await waitTime(ms)
    dispatch(update_list_a([...list]));
}

const pause_wait = async (getState) => {
    while (getState().list.pause && getState().list.sorting) {
        await waitTime(20);
    }
}

const check = async (getState, dispatch, list, force) => {
    await pause_wait(getState);
    if (!getState().list.sorting && !force) return true;
    await update_list(getState, dispatch, list);
    return false
}

export const act_start_btn = () => ({
    type: types.ACV_START_BTN
})

export const act_end_btn = () => ({
    type: types.ACV_END_BTN
})

export const act_clog_btn = () => ({
    type: types.ACV_CLOG_BTN
})

export const add_element = (ele) => ({
    type: types.ADD_ELEMENT,
    ele
})