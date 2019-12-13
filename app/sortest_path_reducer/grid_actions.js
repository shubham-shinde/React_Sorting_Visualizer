import * as types from './grid_action_types';

function waitTime(ms) {
    return (new Promise(resolve => setTimeout(resolve, ms)));
};

export const randomize_array = () => ({
    type: types.RANDOMIZE_GRID
})
export const algo_start = (algo) => ({
    type: types.ALGO_START,
    algo
})
export const algo_end = () => async (dispatch, getState) => {
    dispatch({
        type: types.ALGO_END
    })
    await waitTime(getState().grid.wait_time);
    dispatch({
        type: types.CLEAN_LIST
    })
}

export const algo_pause = () => ({
    type: types.ALGO_PAUSE
})
export const algo_restart = () => ({
    type: types.ALGO_RESTART
})

export const speed_change = (speed) => ({
    type: types.SPEED_CHANGE,
    speed
})

export const update_grid_a = (elements) => ({
    type: types.UPDATE_GRID,
    elements: {...elements}
})

const update_grid = async (getState, dispatch, ele) => {
    const ms = getState().grid.wait_time;
    if (!getState().grid.finding) return;
    await waitTime(ms)
    dispatch(update_grid_a({...ele}));
}

const pause_wait = async (getState) => {
    while (getState().grid.pause && getState().grid.finding) {
        await waitTime(20);
    }
}

const check = async (getState, dispatch, elements, force) => {
    await pause_wait(getState);
    if (!getState().grid.finding && !force) return true;
    await update_grid(getState, dispatch, elements);
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

const point_equal = (p1, p2) => (p1[0]===p2[0] && p1[1]===p2[1]);

const in_list = (list, ele) => (
    list.findIndex((e) => point_equal(e, ele)) > -1
)

const surrounding_point = (row, colomn, point) => {
    const ret = [];
    const ro=point[0], col = point[1];
    if(ro-1 > 0) ret.push([ro-1, col]);
    if(col-1 > 0) ret.push([ro, col-1]);
    if(ro+1 <= row) ret.push([ro+1, col]);
    if(col+1 <= colomn) ret.push([ro, col+1]);
    return ret;
}

export const pathfinding_algo = () => async (dispatch, getState) => {
    const state = getState().grid;
    console.log('algo start pathfinding');
    
    const grid =  state.grid;
    const row = grid.length;
    const column = grid[0].length;
    dispatch(algo_start());
    const start = state.start;
    const end = state.end;
    const clog = state.clog
    let checked = state.checked;
    let queue = [...state.queue];

    queue = [...queue,start];
    if(await check(getState, dispatch, {queue})) return;
    console.log(queue, 'queue');
    let k = 0
    while(queue.length > 0) {
        const top = [...queue[0]];
        queue = [...queue.splice(1)];
        if(await check(getState, dispatch, {queue})) return;
        const neighbour = surrounding_point(row, column, top);
        checked = [...checked, [...top]];
        
        if(await check(getState, dispatch, {checked})) return;

        for(let i in neighbour) {
            if(point_equal(neighbour[i], end)) break;
            if(in_list(checked, neighbour[i]) || in_list(queue, neighbour[i]) || in_list(clog, neighbour[i])) continue;
            queue = [...queue, [...neighbour[i]]];
            if(await check(getState, dispatch, {queue})) return;
        }
        queue = [...queue];
    }
    dispatch(algo_end());
}