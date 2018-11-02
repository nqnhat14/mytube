import * as actionTypes from '../actions/actionTypes';
const initialState = {
    video: null,
    loading: false,
};
const fetchVideoStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const fetchVideoSuccess = (state, action) => {
    return {
        ...state,
        video: action.video,
        loading:false
    }
}
const fetchVideoFail = (state, action) => {
    return {
        ...state,
        loading:false
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_VIDEO_START: return fetchVideoStart(state,action);
        case actionTypes.FETCH_VIDEO_SUCCESS:return fetchVideoSuccess(state,action);
        case actionTypes.FETCH_VIDEO_FAIL:return fetchVideoFail(state,action);
        default: return state;
    }
}
export default reducer;