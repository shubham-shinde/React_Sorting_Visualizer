import * as types from './list_action_types';

function waitTime(ms) {
    return (new Promise(resolve => setTimeout(resolve, ms)));
};

export const randomize_array = () => ({
    type: types.RANDOMIZE_LIST
})

export const update_list = (list) => ({
    type : types.UPDATE_LIST,
    list : [...list]
})

export const start_bubble_sort = () => async (dispatch, getState) => {
    let list = [...getState().list.list];
    const len = list.length;
    const ms = 2;

    for(let i=0; i<len; i++){
        list[i] = {...list[i], pointer: true};
        console.log('update');
        
        dispatch(update_list(list));
        await waitTime(ms);
        console.log('done');
        

        for(let j=0; j<len-1; j++){
            list[j] = {...list[j], pointer: true};
            dispatch(update_list(list));
            await waitTime(ms);

            if(list[j].num>list[j+1].num) {
                list[j] = {...list[j], white: true};
                list[j+1] = {...list[j+1], white: true};

                dispatch(update_list(list));
                await waitTime(ms);

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
}