
import * as types from './grid_action_types';

function gridCreater(rows, column) {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(column);
    }
    console.log('grid', grid);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            grid[i][j] = {
                row: i + 1,
                column: j + 1,
            };
        }
    }
    return grid;
}

const initialState = {
    grid: gridCreater(19, 23),
    finding: false,
    pause: false,
    wait_time: 1,
    actv_srt_btn: true,
    actv_end_btn: false,
    actv_clog_btn: false,
    start: [],
    end: [],
    clog: [],
    checked : [],
    path : [],
    queue : [],
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RANDOMIZE_GRID: {
            const new_state = { ...state };
            return new_state;
        }
        case types.UPDATE_GRID: {
            const new_state = { ...state };
            if(action.elements.queue) {
                new_state.queue = [...action.elements.queue];
            }
            if(action.elements.checked) {
                new_state.checked = [...action.elements.checked];
            }
            return new_state;
        }
        case types.ADD_ELEMENT: {
            const new_state = {...state};
            const ele = [...action.ele];
            if(new_state.actv_srt_btn) {
                let srt = new_state.start;
                if(srt.length > 0 && srt[0] == ele[0] && srt[0] == ele[0]) {
                    srt = [];
                }
                else srt = [...ele];
                new_state.start = [...srt];
                new_state.actv_srt_btn = false;
                new_state.actv_end_btn = true;
                new_state.actv_clog_btn = false;
            }
            else if(new_state.actv_end_btn) {
                let end = new_state.end;
                if(end.length > 0 && end[0] == ele[0] && end[0] == ele[0]) {
                    end = [];
                }
                else end = [...ele];
                new_state.end = [...end];
                new_state.actv_srt_btn = false;
                new_state.actv_end_btn = false;
                new_state.actv_clog_btn = true;
            }
            else if(new_state.actv_clog_btn) {
                let clog = [...new_state.clog];
                
                if(clog.findIndex((e) => (e[0]===ele[0] && e[1]===ele[1])) > -1) {
                    clog = clog.filter((e) => !(e[0]===ele[0] && e[1]===ele[1]))
                }
                else clog = [...clog, ele];
                new_state.clog = [...clog];
                new_state.actv_srt_btn = false;
                new_state.actv_end_btn = false;
            }
            return new_state;
        }
        case types.ACV_START_BTN: {
            const new_state = { ...state };
            new_state.actv_srt_btn
                ? new_state.actv_srt_btn = false
                : new_state.actv_srt_btn = true;
            new_state.actv_clog_btn = false;
            new_state.actv_end_btn = false;
            return new_state;
        }
        case types.ACV_CLOG_BTN: {
            const new_state = { ...state };
            new_state.actv_clog_btn
                ? new_state.actv_clog_btn = false
                : new_state.actv_clog_btn = true;
            new_state.actv_srt_btn = false;
            new_state.actv_end_btn = false;
            return new_state;
        }
        case types.ACV_END_BTN: {
            const new_state = { ...state };
            new_state.actv_end_btn
                ? new_state.actv_end_btn = false
                : new_state.actv_end_btn = true;
            new_state.actv_clog_btn = false;
            new_state.actv_srt_btn = false;
            return new_state;
        }
        case types.ALGO_START: {
            const new_state = { ...state };
            new_state.finding = true;
            return new_state;
        }
        case types.ALGO_END: {
            const new_state = { ...state };
            new_state.finding = false;
            new_state.pause = false;
            return new_state;
        }
        case types.RESET: {
            return state;
        }
        case types.SPEED_CHANGE: {
            const new_state = { ...state };
            new_state.wait_time = action.speed;
            return new_state;
        }
        default:
            return state
    }
}

export default listReducer;