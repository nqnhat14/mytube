import * as actionTypes from './actionTypes';
import axios from '../../axios';
export const fetchAlbumStart = ()=>{
    return{
        type:actionTypes.FETCH_ALBUM_START
    }
};
export const fetchAlbumSuccess = (album)=>{
    return{
        type:actionTypes.FETCH_ALBUM_SUCCESS,
        album:album
    }
};
export const fetchAlbumFail = ()=>{
    return{
        type:actionTypes.FETCH_ALBUM_FAIL
    }
};
export const fetchAlbum = (type) => {
    return (dispatch) => {
        dispatch(fetchAlbumStart());
        axios.get('/getAlbum?type='+type)
        .then(res => {
            console.log(res.data);
            dispatch(fetchAlbumSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchAlbumFail(err));
        })

    }
}