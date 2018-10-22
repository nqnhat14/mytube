import * as actionTypes from '../actions/actionTypes';
const initialState = {
    albums: []
};
const fetchAlbumSuccess = (state,action)=>{
    // const updatedAlbum = {
    //     ...state.albums,
    // }
    console.log(action.album);
    return {
        ...state,
        //[action.album]:action.album
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.FETCH_ALBUM_START:
        //     break;
        case actionTypes.FETCH_ALBUM_SUCCESS:break;//return fetchAlbumSuccess(state,action)
        // case actionTypes.FETCH_ALBUM_FAIL:
        //     break;
        default: return state;
    }
};
export default reducer;