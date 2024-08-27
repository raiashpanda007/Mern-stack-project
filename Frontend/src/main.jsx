import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import store from "./store/Store.js";
import { Provider } from "react-redux";
import { Welcome,Register,Login,Home,LikedVideos, WatchHistory,Subscriptions,Your_Playlist,PlaylistScreen,Search_Results } from './Screens/Screens.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Welcome />} /> 
      <Route path="sign-up" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="liked-videos" element = {<LikedVideos/>}/>
      <Route path="watch-history" element = {<WatchHistory/>}/>
      <Route path="subscriptions" element = {<Subscriptions/>}/>
      <Route path="your-playlist" element = {<Your_Playlist/>}/>
      <Route path="playlist/:playlistID" element = {<PlaylistScreen/>}/>
      <Route path="search-results/:query" element = {<Search_Results/>}/>

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    
  </StrictMode>
);
