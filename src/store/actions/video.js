import * as actionTypes from './actionTypes';
import axios from '../../axios';
export const fetchVideo = (videoId) => {
    return dispatch => {
        dispatch(fetchVideoStart());
        axios.get('/video/'+videoId)
            .then(res => {
                dispatch(fetchVideoSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchVideoFail(err));
            })
    }
}
export const fetchVideoStart = () => {
    return {
        type: actionTypes.FETCH_VIDEO_START
    }
}
export const fetchVideoSuccess = (video) => {
    return {
        type: actionTypes.FETCH_VIDEO_SUCCESS,
        video: video
    }
}
export const fetchVideoFail = (error) => {
    return {
        type: actionTypes.FETCH_VIDEO_FAIL,
        error: error
    }
}