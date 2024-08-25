import {configureStore} from '@reduxjs/toolkit';
import sidebarSlice from './Sidebar';
const store = configureStore({
    reducer: {
        sideBar:sidebarSlice,
    }
});
export default store;