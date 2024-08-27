import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from './Sidebar';
import searchType from './TypeSearchResult'
const store = configureStore({
    reducer: {
        sideBar:sidebarSlice,
        searchType:searchType
    }
});
export default store;