import * as types from './list_action_types';

function waitTime(ms) {
    return (new Promise(resolve => setTimeout(resolve, ms)));
};

export const randomize_array = () => ({
    type: types.RANDOMIZE_LIST
})
export const sorting_start = () => ({
    type: types.SORTING_START
})
export const sorting_end = () => ({
    type: types.SORTING_END
})

export const update_list = (list) => async (dispatch, getState) => {
    const ms = getState().list.wait_time;
    await waitTime(ms);
    dispatch({
        type : types.UPDATE_LIST,
        list : [...list]
    })
}

export const start_bubble_sort = () => async (dispatch, getState) => {
    let list = [...getState().list.list];
    const len = list.length;
    const ms = 10;

    dispatch(sorting_start());

    for(let i=0; i<len; i++){
        list[i] = {...list[i], pointer: true};
        
        dispatch(update_list(list));
        await waitTime(ms);

        for(let j=0; j<len-1; j++){
            list[j] = {...list[j], pointer: true};
            dispatch(update_list(list));
            await waitTime(ms);

            if(list[j].num>list[j+1].num) {
                list[j] = {...list[j], white: true};
                list[j+1] = {...list[j+1], white: true};

                dispatch(update_list(list));
                await waitTime(ms+100);

                let temp= {...list[j]};
                list[j] = {...list[j+1]};
                list[j+1]= {...temp};

                dispatch(update_list(list));
                await waitTime(ms);

                list[j] = {...list[j], white: false};
                list[j+1] = {...list[j+1], white: false};

                dispatch(update_list(list));
                await waitTime(ms);

                list[j+1] = {...list[j+1], pointer: false};
                dispatch(update_list(list));
                await waitTime(ms);
            }
            else {
                list[j] = {...list[j], pointer: false};
                dispatch(update_list(list));
                await waitTime(ms);
            }
        }
        list[i] = {...list[i], pointer: false};
        dispatch(update_list(list));
        await waitTime(ms);
    }
    dispatch(sorting_end());
}

export const selection_sort = () => async (dispatch, getState) => {
    let list = [...getState().list.list];
    const len = list.length;
    const ms = 10;

    dispatch(sorting_start());

    for (let i = 0; i < len; i++) {

        list[i] = {...list[i], pointer: true};
        await dispatch(update_list(list));
        // await waitTime(ms);

        let min = i;
        for (let j = i + 1; j < len; j++) {
            
            list[j] = {...list[j], pointer: true};
            await dispatch(update_list(list));
            // await waitTime(ms);

            if (list[min].num > list[j].num) {
                min = j;
            }

            list[j] = {...list[j], pointer: false};
            await dispatch(update_list(list));
        }
        if (min !== i) {
            list[i] = {...list[i], white: true};
            list[min] = {...list[min], white: true};
            await dispatch(update_list(list));
            // await waitTime(ms+100);

            let tmp = {...list[i]};
            list[i] = {...list[min]};
            list[min] = {...tmp};

            await dispatch(update_list(list));
            // await waitTime(ms);

            list[i] = {...list[i], white: false};
            list[min] = {...list[min], white: false};
            await dispatch(update_list(list));
            // await waitTime(ms);
        }

        list[i] = {...list[i], pointer: false};
        await dispatch(update_list(list));
        // await waitTime(ms);
    }

    dispatch(sorting_end());
}