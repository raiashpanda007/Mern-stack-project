import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from './Sidebar';
import searchType from './TypeSearchResult'
import Upload_pop_up from './Upload_pop_up';
const store = configureStore({
    reducer: {
        sideBar:sidebarSlice,
        searchType:searchType,
        Upload_pop_up:Upload_pop_up

    }
});
export default store;