import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from './Sidebar';
import searchType from './TypeSearchResult'
import Upload_pop_up from './Upload_pop_up';
import Loader from './Loader';
import Logout_pop_up from './Logout_pop_up';
import User from './User';
const store = configureStore({
    reducer: {
        sideBar:sidebarSlice,
        searchType:searchType,
        Upload_pop_up:Upload_pop_up,
        Loader:Loader,
        Logout_pop_up:Logout_pop_up,
        User:User
    }
});
export default store;