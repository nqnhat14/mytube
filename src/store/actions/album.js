import * as actionTypes from './actionTypes';
import axios from '../../axios';
export const fetchAlbumStart = ()=>{
    return{
        type:actionTypes.FETCH_ALBUM_START
    }
};
export const fetchAlbumSuccess = (album,type)=>{
    return{
        type:actionTypes.FETCH_ALBUM_SUCCESS,
        album:album,
        albumType:type
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
            let album = res.data[type].reduce((ac,el)=>({...ac, [el._id]: el }), {})
            dispatch(fetchAlbumSuccess(album,type));
        })
        .catch(err => {
            dispatch(fetchAlbumFail(err));
        })

    }
}

export const search = (searchText) =>{
    return dispatch => dispatch(searchStart(searchText))
}
export const searchStart = (searchText) =>{
    return dispatch => dispatch({
        type:actionTypes.SEARCH_START,
        searchText:searchText
    })
}