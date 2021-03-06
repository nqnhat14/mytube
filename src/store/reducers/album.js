import * as actionTypes from '../actions/actionTypes';
import { albumType } from '../../shared/staticString';
const initialState = {
    albums: {},
    filteredAlbums: {},
    loading: false
};
const fetchAlbumStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}
const fetchAlbumSuccess = (state, action) => {
    return {
        ...state,
        albums: {
            ...state.albums,
            [action.albumType]: action.album
        },
        filteredAlbums: {
            ...state.filteredAlbums,
            [action.albumType]: action.album
        }
    }
}
// const search = (state, action) => {
//     const searchText = action.searchText;
//     let updatedFilteredAlbum = {};
//     for (let type of Object.keys(state.filteredAlbums)) {
//         //if (type === albumType.sport) {
//         let updatedFilteredAlbumType = {};
//         for (let item of Object.keys(state.filteredAlbums[type])) {
//             if (state.filteredAlbums[type][item]) {
//                 if (state.filteredAlbums[type][item].Title.includes(searchText)) {
//                     updatedFilteredAlbumType = {
//                         ...updatedFilteredAlbumType,
//                         [item]:state.filteredAlbums[type][item]
//                     }
//                 }
//             }
//         }
//         updatedFilteredAlbum ={
//             ...updatedFilteredAlbum,
//             [type]:updatedFilteredAlbumType
//         }
//         //}
//     }
//     console.log(updatedFilteredAlbum);
//     return {
//         ...state,
//         filteredAlbums: updatedFilteredAlbum
//     }
// }
const search = (state, action) => {
    const searchText = action.searchText;
    const updatedFilteredAlbum = Object.keys(state.albums).reduce((object1, type) => {
        if (state.albums[type]) {
            const updatedFilteredAlbumType = Object.keys(state.albums[type]).reduce((object2, item) => {
                if (state.albums[type][item].Title.toLowerCase().includes(searchText.toLowerCase())) {
                    console.log(object2);
                    return {
                        ...object2,
                        [item]:state.albums[type][item]
                    }

                };
                return {...object2};
            }, {})
            console.log(updatedFilteredAlbumType);
            return {
                ...object1,
                [type]: updatedFilteredAlbumType
            }
        }
        return {...object1};
    }, {})
    return {
        ...state,
        filteredAlbums: updatedFilteredAlbum
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALBUM_START: return fetchAlbumStart(state, action);
        case actionTypes.FETCH_ALBUM_SUCCESS: return fetchAlbumSuccess(state, action)
        case actionTypes.SEARCH_START: return search(state, action)
        // case actionTypes.FETCH_ALBUM_FAIL:
        //     break;
        default: return state;
    }
};
export default reducer;