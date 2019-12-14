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

export const update_grid_a = (grid) => ({
    type: types.UPDATE_GRID,
    grid: [...grid]
})

const update_grid = async (getState, dispatch, grid) => {
    const ms = getState().grid.wait_time;
    if (!getState().grid.finding) return;
    await waitTime(ms)
    dispatch(update_grid_a([...grid]));
}

const pause_wait = async (getState) => {
    while (getState().grid.pause && getState().grid.finding) {
        await waitTime(20);
    }
}

const check = async (getState, dispatch, grid, force) => {
    await pause_wait(getState);
    if (!getState().grid.finding && !force) return true;
    await update_grid(getState, dispatch, grid);
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

const point_equal = (p1, p2) => (p1.row===p2.row && p1.column===p2.column);

const surrounding_point = (grid, point) => {
    const ret = [];
    const row = grid.length, column = grid[0].length;
    const ro=point.row-1, col = point.column-1;
    if(ro-1 >= 0) ret.push({...grid[ro-1][col]});
    if(col-1 >= 0) ret.push({...grid[ro][col-1]});
    if(ro+1 < row) ret.push({...grid[ro+1][col]});
    if(col+1 < column) ret.push({...grid[ro][col+1]});
    return ret;
}

export const pathfinding_algo = () => async (dispatch, getState) => {
    try {
        const state = getState().grid;
        console.log('algo start pathfinding');
        
        const grid =  [...state.grid];
        dispatch(algo_start());
        let start = {};
        let end = {};
        for(let i in grid) for(let j in grid[i]) {
            if(grid[i][j].start) {
                start = {...grid[i][j]};
            }
            if(grid[i][j].end) {
                end = {...grid[i][j]}
            }
        }

        start.queue = true;

        const coll = [...grid[start.row-1]]
        coll[start.column-1] = {...start};  
        grid[start.row-1] = [...coll];
        
        if(await check(getState, dispatch, grid)) return;
        
        let queue = [
            { 
                point: {...start}, 
                path: [{...start}]
            }
        ];
        console.log(queue, 'queue');
        let k = 0
        while(queue.length > 0) {
            console.log('itr');
            
            const top = {...queue[0].point};
            const path = [...queue[0].path];
            queue = [...queue.splice(1)];
            
            top.queue = false;
            top.checked = true;

            const coll = [...grid[top.row-1]]
            coll[top.column-1] = {...top};  
            grid[top.row-1] = [...coll];

            if(await check(getState, dispatch, grid)) return;
            const neighbour = surrounding_point(grid , top);

            for(let i in neighbour) {
                let curr = {...neighbour[i]}
                if(point_equal(curr, end)) {
                    for(k in path) {
                    const kk = {...path[k]}
                    kk.path = true;
                    
                    const coll = [...grid[kk.row-1]]
                    coll[kk.column-1] = {...kk};  
                    grid[kk.row-1] = [...coll];

                    if(await check(getState, dispatch, grid)) return;
                    }
                    
                    return;
                };
                if(curr.checked || curr.queue || curr.clog) continue;
                const new_path = [...path, {...curr}];
                
                
                queue = [
                    ...queue, 
                    { 
                        point : {...curr}, 
                        path: [...new_path]
                    }
                ];
                curr.queue = true;
                
                const coll = [...grid[curr.row-1]]
                coll[curr.column-1] = {...curr};  
                grid[curr.row-1] = [...coll];
                
                if(await check(getState, dispatch, grid)) return;
            }
            // queue = [...queue];
        }
        dispatch(algo_end());
    }
    catch(e) {
        throw('catch err', e);
    }
}